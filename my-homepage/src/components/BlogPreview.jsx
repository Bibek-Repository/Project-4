import { useEffect, useState } from "react";
import "./BlogPreview.css";

function BlogPreview() {

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

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
          "Error loading blogs:",
          error
        );

      } finally {

        setLoading(false);

      }

    };

    fetchBlogs();

  }, []);

  return (
    <section className="blog-section">

      <div className="blog-container">

        <h2 className="blog-title">
          Latest Blogs
        </h2>

        <p className="blog-subtitle">
          Insights, updates, and knowledge from our AI development team
        </p>

        {loading ? (

          <p>Loading blogs...</p>

        ) : (

          <div className="blog-grid">

            {blogs.length === 0 ? (

              <p>No blogs available.</p>

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

                  <span className="blog-date">

                    {new Date(
                      blog.createdAt
                    ).toLocaleDateString()}

                  </span>

                  <span className="blog-category">
                    {blog.category}
                  </span>

                  <h3>
                    {blog.title}
                  </h3>

                  <p>
                    {blog.excerpt}
                  </p>

                  <button className="read-more">
                    Read More
                  </button>

                </div>

              ))

            )}

          </div>

        )}

      </div>

    </section>
  );
}

export default BlogPreview;