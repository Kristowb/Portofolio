import { postsData } from '../data/profile';

interface PostsProps {
  siteMode: 'professional' | 'personal';
}

export default function Posts({ siteMode }: PostsProps) {
  const isProd = siteMode === 'professional';

  // Filter posts berdasarkan kecocokan tema (professional vs personal)
  const filteredPosts = postsData.filter((post) => {
    if (isProd) {
      return post.id.startsWith('prof-');
    } else {
      return post.id.startsWith('pers-');
    }
  });

  return (
    <section id="posts" className="editorial-section fade-in-up">
      <div className="editorial-left">
        <h2 style={{ fontFamily: 'var(--font-family)' }}>Posts</h2>
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
                  style={{ fontFamily: 'var(--font-family)' }}
                >
                  {post.title}
                </a>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  · {post.readTime}
                </span>
              </div>
              <time 
                dateTime={post.date} 
                style={{ fontSize: '0.85rem', color: 'var(--text-muted)', whiteSpace: 'nowrap', fontFamily: 'var(--font-mono)' }}
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
