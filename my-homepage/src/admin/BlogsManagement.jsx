import AdminLayout from "../components/AdminLayout";
import "./BlogsManagement.css";

function BlogsManagement() {

  const blogs = [
    {
      id: 1,
      title: "Future of Artificial Intelligence",
      category: "AI",
      status: "Published"
    },
    {
      id: 2,
      title: "Benefits of Cloud Computing",
      category: "Technology",
      status: "Draft"
    }
  ];

  return (
    <AdminLayout>

      <div className="blogs-header">

        <h1>Blogs Management</h1>

        <button className="add-blog-btn">
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
              <tr key={blog.id}>

                <td>{blog.title}</td>

                <td>{blog.category}</td>

                <td>
                  <span
                    className={
                      blog.status === "Published"
                        ? "published"
                        : "draft"
                    }
                  >
                    {blog.status}
                  </span>
                </td>

                <td>

                  <button className="edit-btn">
                    Edit
                  </button>

                  <button className="delete-btn">
                    Delete
                  </button>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </AdminLayout>
  );
}

export default BlogsManagement;