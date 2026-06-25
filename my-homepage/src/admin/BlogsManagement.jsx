import AdminLayout from "../components/AdminLayout";
import "./BlogsManagement.css";
import { useEffect, useState } from "react";

function BlogsManagement() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const token = localStorage.getItem("token");

  const [newBlog, setNewBlog] = useState({
    title: "",
    excerpt: "",
    category: "Technology",
    featured: false,
  });

  useEffect(() => {
    fetchBlogs();
  }, [token]);

  const fetchBlogs = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/blogs",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch blogs");
      }

      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingBlog(null);
    setSelectedImage(null);

    setNewBlog({
      title: "",
      excerpt: "",
      category: "Technology",
      featured: false,
    });
  };

  const handleEdit = (blog) => {
    setEditingBlog(blog);

    setNewBlog({
      title: blog.title || "",
      excerpt: blog.excerpt || "",
      category: blog.category || "Technology",
      featured: blog.featured || false,
    });

    setSelectedImage(null);
    setShowModal(true);
  };

  const createBlog = async (e) => {
    e.preventDefault();

    try {
      let imageUrl = "";

      if (selectedImage) {
        const formData = new FormData();

        formData.append(
          "image",
          selectedImage
        );

        const uploadResponse = await fetch(
          "http://localhost:5000/api/upload",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
            },
            body: formData,
          }
        );

        if (!uploadResponse.ok) {
          throw new Error(
            "Image upload failed"
          );
        }

        const uploadData =
          await uploadResponse.json();

        imageUrl =
          uploadData.imageUrl;
      }

      const response = await fetch(
        "http://localhost:5000/api/blogs",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
            Authorization:
              `Bearer ${token}`,
          },

          body: JSON.stringify({
            ...newBlog,
            image: imageUrl,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(
          "Failed to create blog"
        );
      }

      const data =
        await response.json();

      setBlogs((prev) => [
        data,
        ...prev,
      ]);

      closeModal();
    } catch (error) {
      console.error(error);
    }
  };

  const updateBlog = async (e) => {
    e.preventDefault();

    try {
      let imageUrl =
        editingBlog?.image || "";

      if (selectedImage) {
        const formData =
          new FormData();

        formData.append(
          "image",
          selectedImage
        );

        const uploadResponse =
          await fetch(
            "http://localhost:5000/api/upload",
            {
              method: "POST",
              headers: {
                Authorization:
                  `Bearer ${token}`,
              },
              body: formData,
            }
          );

        if (!uploadResponse.ok) {
          throw new Error(
            "Image upload failed"
          );
        }

        const uploadData =
          await uploadResponse.json();

        imageUrl =
          uploadData.imageUrl;
      }

      const response = await fetch(
        `http://localhost:5000/api/blogs/${editingBlog._id}`,
        {
          method: "PUT",

          headers: {
            "Content-Type":
              "application/json",

            Authorization:
              `Bearer ${token}`,
          },

          body: JSON.stringify({
            ...newBlog,
            image: imageUrl,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(
          "Failed to update blog"
        );
      }

      const data =
        await response.json();

      setBlogs((prev) =>
        prev.map((blog) =>
          blog._id === data._id
            ? data
            : blog
        )
      );

      closeModal();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteBlog = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this blog?"
    );

    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `http://localhost:5000/api/blogs/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(
          "Failed to delete blog"
        );
      }

      setBlogs((prev) =>
        prev.filter(
          (blog) => blog._id !== id
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <h2>Loading blogs...</h2>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="blogs-header">
        <h1>Blogs Management</h1>

        <button
          className="add-blog-btn"
          onClick={() => {
            closeModal();
            setShowModal(true);
          }}
        >
          + Add Blog
        </button>
      </div>

      <div className="blogs-table-container">
        <table className="blogs-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {blogs.map((blog) => (
              <tr key={blog._id}>
                <td>{blog.title}</td>

                <td>{blog.category}</td>

                <td>
                  <span
                    className={
                      blog.featured
                        ? "published"
                        : "draft"
                    }
                  >
                    {blog.featured
                      ? "Featured"
                      : "Standard"}
                  </span>
                </td>

                <td>
                  <button
                    className="edit-btn"
                    onClick={() =>
                      handleEdit(blog)
                    }
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      deleteBlog(blog._id)
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>
              {editingBlog
                ? "Edit Blog"
                : "Add Blog"}
            </h2>

            <button
              type="button"
              className="close-btn"
              onClick={closeModal}
            >
              ×
            </button>

            <form
              onSubmit={
                editingBlog
                  ? updateBlog
                  : createBlog
              }
            >
              <input
                type="text"
                placeholder="Blog Title"
                value={newBlog.title}
                onChange={(e) =>
                  setNewBlog({
                    ...newBlog,
                    title:
                      e.target.value,
                  })
                }
                required
              />

              <textarea
                placeholder="Excerpt"
                value={newBlog.excerpt}
                onChange={(e) =>
                  setNewBlog({
                    ...newBlog,
                    excerpt:
                      e.target.value,
                  })
                }
                required
              />

              <input
                type="text"
                placeholder="Category"
                value={newBlog.category}
                onChange={(e) =>
                  setNewBlog({
                    ...newBlog,
                    category:
                      e.target.value,
                  })
                }
              />

              <label>
                <input
                  type="checkbox"
                  checked={
                    newBlog.featured
                  }
                  onChange={(e) =>
                    setNewBlog({
                      ...newBlog,
                      featured:
                        e.target.checked,
                    })
                  }
                />
                Featured Blog
              </label>

              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setSelectedImage(
                    e.target.files[0]
                  )
                }
              />

              <button type="submit">
                {editingBlog
                  ? "Update Blog"
                  : "Save Blog"}
              </button>
            </form>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}

export default BlogsManagement;

