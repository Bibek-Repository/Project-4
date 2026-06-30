import { useState, useEffect } from "react";
import AdminLayout from "../components/AdminLayout";
import "./BlogsManagement.css";


function BlogsManagement() {
  const token = localStorage.getItem("token");

  // ============================
  // States
  // ============================

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);

  const [selectedImage, setSelectedImage] = useState(null);

  const initialForm = {
    title: "",
    excerpt: "",
    content: "",
    category: "Technology",
    featured: false,
    image: "",
  };

  const [newBlog, setNewBlog] = useState(initialForm);

  // ============================
  // Load Blogs
  // ============================

  useEffect(() => {
    fetchBlogs();
  }, []);

  // ============================
  // Form Handlers
  // ============================

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setNewBlog((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageChange = (e) => {
    if (e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  // ============================
  // Reset Form
  // ============================

  const resetForm = () => {
    setNewBlog(initialForm);
    setSelectedImage(null);
    setEditingBlog(null);
  };

  // ============================
  // Modal Controls
  // ============================

  const openAddModal = () => {
    resetForm();
    setShowModal(true);
  };

  const closeModal = () => {
    resetForm();
    setShowModal(false);
  };

  // ============================
  // Edit Existing Blog
  // ============================

  const handleEdit = (blog) => {
    setEditingBlog(blog);

    setNewBlog({
      title: blog.title || "",
      excerpt: blog.excerpt || "",
      content: blog.content || "",
      category: blog.category || "Technology",
      featured: blog.featured || false,
      image: blog.image || "",
    });

    setSelectedImage(null);
    setShowModal(true);
  };

  // ============================
  // Upload Image
  // ============================

  const uploadImage = async () => {
    if (!selectedImage) {
      return editingBlog?.image || "";
    }

    const formData = new FormData();

    formData.append("image", selectedImage);

    const response = await fetch(
      "${import.meta.env.VITE_API_URL}/api/upload",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Image upload failed.");
    }

    const data = await response.json();

    return data.imageUrl;
  };

    // ============================
  // Fetch Blogs
  // ============================

  const fetchBlogs = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "${import.meta.env.VITE_API_URL}/api/blogs",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch blogs.");
      }

      const data = await response.json();

      setBlogs(data);
    } catch (error) {
      console.error(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  // ============================
  // Create Blog
  // ============================

  const createBlog = async (e) => {
    e.preventDefault();

    try {
      const imageUrl = await uploadImage();

      const response = await fetch(
        "${import.meta.env.VITE_API_URL}/api/blogs",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },

          body: JSON.stringify({
            ...newBlog,
            image: imageUrl,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create blog.");
      }

      const createdBlog = await response.json();

      setBlogs((prev) => [createdBlog, ...prev]);

      closeModal();

      alert("Blog created successfully.");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  // ============================
  // Update Blog
  // ============================

  const updateBlog = async (e) => {
    e.preventDefault();

    if (!editingBlog) return;

    try {
      const imageUrl = await uploadImage();

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/blogs/${editingBlog._id}`,
        {
          method: "PUT",

          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },

          body: JSON.stringify({
            ...newBlog,
            image: imageUrl,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update blog.");
      }

      const updatedBlog = await response.json();

      setBlogs((prev) =>
        prev.map((blog) =>
          blog._id === updatedBlog._id ? updatedBlog : blog
        )
      );

      closeModal();

      alert("Blog updated successfully.");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  // ============================
  // Delete Blog
  // ============================

  const deleteBlog = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog?"
    );

    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/blogs/${id}`,
        {
          method: "DELETE",

          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete blog.");
      }

      setBlogs((prev) =>
        prev.filter((blog) => blog._id !== id)
      );

      alert("Blog deleted successfully.");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  // ============================
  // Loading Screen
  // ============================

  if (loading) {
    return (
      <AdminLayout>
        <div className="blogs-loading">
          <h2>Loading blogs...</h2>
        </div>
      </AdminLayout>
    );
  }

    return (
    <AdminLayout>

      <div className="blogs-header">

        <div>
          <h1>Blogs Management</h1>
          <p>Manage, edit and publish blog articles.</p>
        </div>

        <button
          className="add-blog-btn"
          onClick={openAddModal}
        >
          + Add Blog
        </button>

      </div>

      {blogs.length === 0 ? (

        <div className="empty-state">

          <h2>No Blogs Available</h2>

          <p>
            Click the <strong>Add Blog</strong> button to create your first
            blog post.
          </p>

        </div>

      ) : (

        <div className="blogs-table-container">

          <table className="blogs-table">

            <thead>

              <tr>

                <th>Image</th>

                <th>Title</th>

                <th>Category</th>

                <th>Featured</th>

                <th>Date</th>

                <th>Actions</th>

              </tr>

            </thead>

            <tbody>

              {blogs.map((blog) => (

                <tr key={blog._id}>

                  <td>

                    {blog.image ? (

                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="blog-thumbnail"
                      />

                    ) : (

                      <div className="no-image">

                        No Image

                      </div>

                    )}

                  </td>

                  <td>

                    <div className="blog-title">

                      <strong>

                        {blog.title}

                      </strong>

                      <small>

                        {blog.excerpt
                          ? blog.excerpt.length > 90
                            ? blog.excerpt.substring(0, 90) + "..."
                            : blog.excerpt
                          : "No excerpt"}

                      </small>

                    </div>

                  </td>

                  <td>

                    <span className="category-badge">

                      {blog.category}

                    </span>

                  </td>

                  <td>

                    {blog.featured ? (

                      <span className="published">

                        Featured

                      </span>

                    ) : (

                      <span className="draft">

                        Standard

                      </span>

                    )}

                  </td>

                  <td>

                    {blog.createdAt
                      ? new Date(
                          blog.createdAt
                        ).toLocaleDateString()
                      : "-"}

                  </td>

                  <td>

                    <div className="action-buttons">

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

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      )}

      {showModal && (

                <div className="blogs-modal-overlay">

          <div className="blogs-modal-content">

            <button
              className="close-btn"
              type="button"
              onClick={closeModal}
            >
              ×
            </button>

            <h2>
              {editingBlog ? "Edit Blog" : "Add New Blog"}
            </h2>

            <form
              onSubmit={
                editingBlog
                  ? updateBlog
                  : createBlog
              }
            >

              {/* Blog Title */}

              <div className="form-group">

                <label>Blog Title</label>

                <input
                  type="text"
                  name="title"
                  value={newBlog.title}
                  onChange={handleChange}
                  required
                />

              </div>

              {/* Excerpt */}

              <div className="form-group">

                <label>Excerpt</label>

                <textarea
                  rows="3"
                  name="excerpt"
                  value={newBlog.excerpt}
                  onChange={handleChange}
                  required
                />

              </div>

              {/* Content */}

              <div className="form-group">

                <label>Content</label>

                <textarea
                  rows="12"
                  name="content"
                  value={newBlog.content}
                  onChange={handleChange}
                  placeholder="Write the complete blog article here..."
                  required
                />

              </div>

              

             

              <div className="form-group">

                <label>Category</label>

                <input
                  type="text"
                  name="category"
                  value={newBlog.category}
                  onChange={handleChange}
                />

              </div>

              {/* Featured */}

              <div className="form-group checkbox-group">

                <label>

                  <input
                    type="checkbox"
                    name="featured"
                    checked={newBlog.featured}
                    onChange={handleChange}
                  />

                  Featured Blog

                </label>

              </div>

              {/* Image Upload */}

              <div className="form-group">

                <label>Blog Image</label>

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />

              </div>

              {/* Preview */}

              {(selectedImage || newBlog.image) && (

                <div className="image-preview">

                  <img
                    src={
                      selectedImage
                        ? URL.createObjectURL(selectedImage)
                        : newBlog.image
                    }
                    alt="Preview"
                  />

                </div>

              )}

              {/* Buttons */}

              <div className="modal-buttons">

                <button
                  type="button"
                  className="cancel-btn"
                  onClick={closeModal}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="save-btn"
                >
                  {editingBlog
                    ? "Update Blog"
                    : "Create Blog"}
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </AdminLayout>

  );

}

export default BlogsManagement;