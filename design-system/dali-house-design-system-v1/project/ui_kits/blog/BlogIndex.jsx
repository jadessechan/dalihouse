/* BlogIndex.jsx — the journal listing page.
   FeaturedCard (1 prominent post) + PostCard grid (3-up).
   Source: jadessechan/dalihouse@master src/app/blog/page.tsx */

function FeaturedCard({ post }) {
  return (
    <a className="featured" href={`/blog/${post.slug}`}>
      <div className={`photo bg-${post.thumb}`}>
        <span className="pill">Featured</span>
      </div>
      <div className="body">
        <p className="meta">{post.date} · {post.readTime}</p>
        <h2>{post.title}</h2>
        <p>{post.description}</p>
        <span className="read">Read article →</span>
      </div>
    </a>
  );
}

function PostCard({ post }) {
  return (
    <a className="card" href={`/blog/${post.slug}`}>
      <div className={`photo bg-${post.thumb}`}>
        <span className="pill">{post.tag}</span>
      </div>
      <div className="body">
        <p className="meta">{post.date} · {post.readTime}</p>
        <h3>{post.title}</h3>
        <p>{post.description}</p>
        <span className="read">Read →</span>
      </div>
    </a>
  );
}

export default function BlogIndex({ posts }) {
  const [featured, ...rest] = posts;
  return (
    <main>
      <header className="header">
        <p className="eyebrow">Journal</p>
        <h1>The Dali House Blog</h1>
        <p className="lede">Thoughts on coliving, relocating, and building a life you love in Dallas.</p>
      </header>

      <section className="posts">
        <div className="posts-inner">
          {featured && <FeaturedCard post={featured} />}
          <div className="grid">
            {rest.map((p) => <PostCard key={p.slug} post={p} />)}
          </div>
        </div>
      </section>
    </main>
  );
}
