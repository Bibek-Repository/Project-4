import "./BlogPreview.css";

function BlogPreview() {
  const blogs = [
    {
      title: "How AI is Transforming Modern Businesses",
      date: "June 2026",
      excerpt:
        "Explore how artificial intelligence is reshaping industries with automation, analytics, and intelligent systems.",
    },
    {
      title: "Top 5 AI Tools for Startups in 2026",
      date: "May 2026",
      excerpt:
        "A breakdown of essential AI tools that startups can use to scale faster and reduce operational costs.",
    },
    {
      title: "Building Scalable MERN Applications",
      date: "April 2026",
      excerpt:
        "Best practices for building scalable and maintainable full-stack applications using the MERN stack.",
    },
  ];

  return (
    <section className="blog-section">
      <div className="blog-container">
        <h2 className="blog-title">Latest Blogs</h2>
        <p className="blog-subtitle">
          Insights, updates, and knowledge from our AI development team
        </p>

        <div className="blog-grid">
          {blogs.map((blog, index) => (
            <div className="blog-card" key={index}>
              <span className="blog-date">{blog.date}</span>
              <h3>{blog.title}</h3>
              <p>{blog.excerpt}</p>
              <button className="read-more">Read More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogPreview;