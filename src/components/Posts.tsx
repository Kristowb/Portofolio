import { postsData } from '../data/profile';

interface PostsProps {
  siteMode: 'professional' | 'personal';
}

export default function Posts({ siteMode }: PostsProps) {
  const isProd = siteMode === 'professional';

  // Filter posts berdasarkan kecocokan tema (professional vs personal)
  const filteredPosts = postsData.filter((post) => {
    if (isProd) {
      // Tampilkan artikel profesional
      return post.slug === 'sorting' || post.slug === 'interpretability';
    } else {
      // Tampilkan artikel personal/reflektif
      return post.slug === 'clay-and-light' || post.slug === 'sparse-rewards' || post.slug === 'fast';
    }
  });

  return (
    <section className="editorial-section fade-in-up">
      <div className="editorial-left">
        <h2>Posts</h2>
      </div>
      <div className="editorial-right">
        <ul className="posts-list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {filteredPosts.map((post) => (
            <li key={post.id} className="post-item-row">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                {post.pinned && (
                  <span style={{ color: 'var(--color-gold)', fontSize: '0.8rem' }} title="Pinned">
                    ✦
                  </span>
                )}
                <a 
                  href={`/blog/${post.slug}`} 
                  onClick={(e) => e.preventDefault()} 
                  className="post-title-link illuminated-link"
                >
                  {post.title}
                </a>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  · {post.readTime}
                </span>
              </div>
              <time 
                dateTime={post.date} 
                style={{ fontSize: '0.85rem', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}
              >
                {post.date}
              </time>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
