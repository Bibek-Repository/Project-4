import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function BlogDetails() {
  const { slug } = useParams();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchBlog();
  }, [slug]);

  const fetchBlog = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/blogs/slug/${slug}`
      );

      setBlog(res.data);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Blog not found.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div style={{ padding: "100px", textAlign: "center" }}>
        <h2>Loading...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: "100px", textAlign: "center" }}>
        <h2>{error}</h2>
      </div>
    );
  }

  return (
    <div
      className="blog-details"
      style={{
        maxWidth: "900px",
        margin: "80px auto",
        padding: "20px",
      }}
    >
      <img
        src={blog.image}
        alt={blog.title}
        style={{
          width: "100%",
          borderRadius: "12px",
          marginBottom: "30px",
        }}
      />

      <h1>{blog.title}</h1>

      <p
        style={{
          color: "#666",
          marginBottom: "30px",
        }}
      >
        By {blog.author}
      </p>

      <div
        style={{
          lineHeight: "1.8",
          whiteSpace: "pre-wrap",
        }}
      >
        {blog.content}
      </div>
    </div>
  );
}

export default BlogDetails;