import "./GalleryBlog.css";

function GalleryBlog() {
  return (
    <div className="gallery-blog-page">
      <section className="gallery-section">

        <div className="section-header">
          <h1>Photo Gallery</h1>
          <p>Moments from our AI projects, events and innovations</p>
        </div>

        <div className="gallery-grid">

          <div className="gallery-item g1"></div>
          <div className="gallery-item g2"></div>
          <div className="gallery-item g3"></div>
          <div className="gallery-item g4"></div>
          <div className="gallery-item g5"></div>
          <div className="gallery-item g6"></div>

        </div>

      </section>

      <section className="blog-section">

        <div className="section-header">
          <h1>Latest Blogs</h1>
          <p>Insights, updates and AI knowledge from our team</p>
        </div>

        <div className="blog-grid">

          <div className="blog-card">
            <div className="blog-image b1"></div>
            <h3>Future of AI in Business</h3>
            <p>
              Discover how AI is transforming industries and creating new opportunities.
            </p>
            <button>Read More</button>
          </div>

          <div className="blog-card">
            <div className="blog-image b2"></div>
            <h3>Automation Trends 2026</h3>
            <p>
              Learn about the latest automation technologies shaping the future.
            </p>
            <button>Read More</button>
          </div>

          <div className="blog-card">
            <div className="blog-image b3"></div>
            <h3>AI Virtual Assistants</h3>
            <p>
              How virtual assistants improve productivity and customer service.
            </p>
            <button>Read More</button>
          </div>

        </div>

      </section>

    </div>
  );
}

export default GalleryBlog;