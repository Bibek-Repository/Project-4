import "./GalleryBlog.css";
import { useEffect, useState } from "react";

function GalleryBlog() {

  const [gallery, setGallery] = useState([]);
  const [blogs, setBlogs] = useState([]);

  const [loadingGallery, setLoadingGallery] =
    useState(true);

  const [loadingBlogs, setLoadingBlogs] =
    useState(true);

  useEffect(() => {

    const fetchGallery = async () => {

      try {

        const response = await fetch(
          "http://localhost:5000/api/gallery"
        );

        const data = await response.json();

        setGallery(data);

      } catch (error) {

        console.error(
          "Error fetching gallery:",
          error
        );

      } finally {

        setLoadingGallery(false);

      }

    };

    fetchGallery();

  }, []);

  useEffect(() => {

    const fetchBlogs = async () => {

      try {

        const response = await fetch(
          "http://localhost:5000/api/blogs"
        );

        const data = await response.json();

        setBlogs(data);

      } catch (error) {

        console.error(
          "Error fetching blogs:",
          error
        );

      } finally {

        setLoadingBlogs(false);

      }

    };

    fetchBlogs();

  }, []);

  return (
    <div className="gallery-blog-page">

      {/* Gallery Section */}

      <section className="gallery-section">

        <div className="section-header">
          <h1>Photo Gallery</h1>

          <p>
            Moments from our AI projects,
            events and innovations
          </p>
        </div>

        <div className="gallery-grid">

          {loadingGallery ? (

            <p>Loading gallery...</p>

          ) : gallery.length === 0 ? (

            <p>No gallery images found.</p>

          ) : (

            gallery.map((image) => (

              <div
                className="gallery-card"
                key={image._id}
              >

                <img
                  src={`http://localhost:5000${image.image}`}
                  alt={image.title}
                  className="gallery-image"
                />

                <div className="gallery-content">

                  <h3>{image.title}</h3>

                  <p>{image.category}</p>

                </div>

              </div>

            ))

          )}

        </div>

      </section>

      {/* Blog Section */}

      <section className="blog-section">

        <div className="section-header">

          <h1>Latest Blogs</h1>

          <p>
            Insights, updates and AI
            knowledge from our team
          </p>

        </div>

        <div className="blog-grid">

          {loadingBlogs ? (

            <p>Loading blogs...</p>

          ) : blogs.length === 0 ? (

            <p>No blogs found.</p>

          ) : (

            blogs.map((blog) => (

              <div
                className="blog-card"
                key={blog._id}
              >

                {blog.image && (

                  <img
                    src={`http://localhost:5000${blog.image}`}
                    alt={blog.title}
                    className="blog-image"
                  />

                )}

                <div className="blog-content">

                  <h3>{blog.title}</h3>

                  <p>{blog.excerpt}</p>

                  <div className="blog-meta">

                    <span>
                      {blog.category}
                    </span>

                    <span>
                      {new Date(
                        blog.createdAt
                      ).toLocaleDateString()}
                    </span>

                  </div>

                  <button className="read-more-btn">
                    Read More
                  </button>

                </div>

              </div>

            ))

          )}

        </div>

      </section>

    </div>
  );
}

export default GalleryBlog;