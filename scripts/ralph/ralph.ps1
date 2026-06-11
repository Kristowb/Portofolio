# Ralph Wiggum - PowerShell Autonomous AI Agent Loop
# Penggunaan: .\scripts\ralph\ralph.ps1 [-Tool amp|claude] [-MaxIterations 10]

param (
    [string]$Tool = "claude",
    [int]$MaxIterations = 10
)

$ErrorActionPreference = "Stop"

# Jalur berkas
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$ProjectRoot = Resolve-Path (Join-Path $ScriptDir "..\..")
$PrdFile = Join-Path $ProjectRoot "prd.json"
$ProgressFile = Join-Path $ProjectRoot "progress.txt"
$LastBranchFile = Join-Path $ScriptDir ".last-branch"

Write-Host "=== Memulai Ralph Wiggum Loop ===" -ForegroundColor Cyan
Write-Host "Alat: $Tool" -ForegroundColor Yellow
Write-Host "Maksimal Iterasi: $MaxIterations" -ForegroundColor Yellow

# Validasi berkas prd.json
if (-not (Test-Path $PrdFile)) {
    Write-Error "File prd.json tidak ditemukan di root proyek: $PrdFile"
}

# Fungsi untuk mendapatkan cerita pengguna aktif berikutnya
function Get-NextStory {
    $prd = Get-Content $PrdFile -Raw | ConvertFrom-Json
    $stories = $prd.userStories | Where-Object { $_.passes -eq $false } | Sort-Object priority
    if ($stories -and $stories.Count -gt 0) {
        return $stories[0]
    } elseif ($stories) {
        return $stories
    }
    return $null
}

# Periksa Git branch dari prd.json
$prd = Get-Content $PrdFile -Raw | ConvertFrom-Json
$TargetBranch = $prd.branchName

if (-not $TargetBranch) {
    Write-Error "Nama branch tidak ditentukan di prd.json (branchName)"
}

# Dapatkan branch saat ini
$CurrentBranch = (git branch --show-current).Trim()
Write-Host "Branch Git saat ini: $CurrentBranch" -ForegroundColor Yellow
Write-Host "Target branch Ralph: $TargetBranch" -ForegroundColor Yellow

if ($CurrentBranch -ne $TargetBranch) {
    Write-Host "Beralih ke target branch: $TargetBranch..." -ForegroundColor Gray
    # Periksa apakah branch sudah ada
    $branchExists = git branch --list $TargetBranch
    if ($branchExists) {
        git checkout $TargetBranch
    } else {
        git checkout -b $TargetBranch
    }
}

# Loop Iterasi
for ($i = 1; $i -le $MaxIterations; $i++) {
    Write-Host "`n--- Iterasi $i dari $MaxIterations ---" -ForegroundColor Blue
    
    # Ambil cerita pengguna berikutnya
    $ActiveStory = Get-NextStory
    if (-not $ActiveStory) {
        Write-Host "Semua cerita pengguna di prd.json telah selesai (passes: true)!" -ForegroundColor Green
        break
    }
    
    Write-Host "Story Aktif: [$($ActiveStory.id)] - $($ActiveStory.title)" -ForegroundColor Cyan
    Write-Host "Deskripsi: $($ActiveStory.description)" -ForegroundColor Gray
    
    # Jalankan alat AI
    if ($Tool -eq "claude") {
        Write-Host "Menjalankan Claude Code..." -ForegroundColor Yellow
        # Menginstruksikan Claude untuk membaca prd.json dan mengimplementasikan cerita aktif
        npx @anthropic-ai/claude-code -p "Kerjakan story $($ActiveStory.id) yang ada di prd.json. Rujuk scripts/ralph/CLAUDE.md untuk instruksi lengkap pengerjaan otonom."
    } elseif ($Tool -eq "amp") {
        Write-Host "Menjalankan Amp CLI..." -ForegroundColor Yellow
        amp thread create --prompt-file "$ScriptDir\prompt.md"
    } else {
        Write-Error "Alat '$Tool' tidak dikenal. Gunakan 'claude' atau 'amp'."
    }
    
    # Verifikasi apakah cerita pengguna berhasil diselesaikan pada iterasi ini
    $UpdatedStory = Get-NextStory
    if ($UpdatedStory -and $UpdatedStory.id -eq $ActiveStory.id) {
        Write-Warning "Iterasi $i selesai, tetapi story $($ActiveStory.id) belum berhasil diselesaikan (passes masih false). Menghentikan loop untuk menghindari kegagalan beruntun."
        exit 1
    }
    
    Write-Host "Story $($ActiveStory.id) berhasil diselesaikan!" -ForegroundColor Green
}

Write-Host "`n=== Ralph Loop Selesai ===" -ForegroundColor Green
