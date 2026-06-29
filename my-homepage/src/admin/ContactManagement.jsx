import { useEffect, useState } from "react";
import AdminLayout from "../components/AdminLayout";
import "./ContactManagement.css";

function ContactManagement() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);

  const token = localStorage.getItem("token");

  // ============================
  // Fetch Enquiries
  // ============================

  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/contacts",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch enquiries.");
        }

        const data = await response.json();
        setEnquiries(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchEnquiries();
  }, [token]);

  // ============================
  // Delete Enquiry
  // ============================

  const deleteEnquiry = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this enquiry?"
    );

    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `http://localhost:5000/api/contacts/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete enquiry.");
      }

      setEnquiries((prev) =>
        prev.filter((item) => item._id !== id)
      );

      if (
        selectedEnquiry &&
        selectedEnquiry._id === id
      ) {
        setSelectedEnquiry(null);
      }
    } catch (error) {
      console.error(error);
      alert("Unable to delete enquiry.");
    }
  };

  // ============================
  // Loading
  // ============================

  if (loading) {
    return (
      <AdminLayout>
        <h2>Loading enquiries...</h2>
      </AdminLayout>
    );
  }
  const markAsViewed = async (id) => {
  try {
    await fetch(
      `http://localhost:5000/api/contacts/${id}/view`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setEnquiries((prev) =>
      prev.map((item) =>
        item._id === id
          ? { ...item, status: "Viewed" }
          : item
      )
    );

    setSelectedEnquiry((prev) =>
      prev
        ? { ...prev, status: "Viewed" }
        : prev
    );
  } catch (error) {
    console.error(error);
  }
};

  // ============================
  // UI
  // ============================

  return (
    <AdminLayout>
      <div className="contacts-header">
        <div>
          <h1>Contact Enquiries</h1>

          <p>Manage customer enquiries submitted through the website.</p>
        </div>

        <input type="text" placeholder="Search enquiries..." />
      </div>

      <div className="contacts-table-container">
        <table className="contacts-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Company</th>
              <th>Country</th>
              <th>Job Title</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {enquiries.length === 0 ? (
              <tr>
                <td colSpan="8">No enquiries found.</td>
              </tr>
            ) : (
              enquiries.map((enquiry) => (
                <tr key={enquiry._id}>
                  <td>{enquiry.name}</td>

                  <td>{enquiry.email}</td>

                  <td>
                    <span className="company-badge">{enquiry.company}</span>
                  </td>

                  <td>{enquiry.country}</td>

                  <td>
                    <span className="service-badge">{enquiry.jobTitle}</span>
                  </td>

                  <td>
                    <span
                      className={
                        enquiry.status === "Viewed"
                          ? "status-viewed"
                          : "status-new"
                      }
                    >
                      ● {enquiry.status}
                    </span>
                  </td>

                  <td>{new Date(enquiry.createdAt).toLocaleString()}</td>

                  <td>
                    <button
                      className="view-btn"
                      onClick={() => {
                        setSelectedEnquiry(enquiry);

                        if (enquiry.status === "New") {
                          markAsViewed(enquiry._id);
                        }
                      }}
                    >
                      View
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() => deleteEnquiry(enquiry._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* =======================
          ENQUIRY DETAILS MODAL
      ======================== */}

      {selectedEnquiry && (
        <div
          className="contact-modal-overlay"
          onClick={() => setSelectedEnquiry(null)}
        >
          <div
            className="contact-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h2>Client Enquiry</h2>

              <button
                className="close-icon"
                onClick={() => setSelectedEnquiry(null)}
              >
                ×
              </button>
            </div>

            <div className="modal-body">
              <div className="detail-row">
                <span>Full Name</span>
                <strong>{selectedEnquiry.name}</strong>
              </div>

              <div className="detail-row">
                <span>Email Address</span>
                <strong>{selectedEnquiry.email}</strong>
              </div>

              <div className="detail-row">
                <span>Phone Number</span>
                <strong>{selectedEnquiry.phone}</strong>
              </div>

              <div className="detail-row">
                <span>Company Name</span>
                <strong>{selectedEnquiry.company}</strong>
              </div>

              <div className="detail-row">
                <span>Country</span>
                <strong>{selectedEnquiry.country}</strong>
              </div>

              <div className="detail-row">
                <span>Job Title</span>
                <strong>{selectedEnquiry.jobTitle}</strong>
              </div>

              <div className="detail-row">
                <span>Submitted On</span>
                <strong>
                  {new Date(selectedEnquiry.createdAt).toLocaleString()}
                </strong>
              </div>

              <div className="message-section">
                <h3>Job Details</h3>

                <div className="message-box">{selectedEnquiry.jobDetails}</div>
              </div>
            </div>

            <div className="modal-footer">
              <button
                className="delete-btn"
                onClick={() => deleteEnquiry(selectedEnquiry._id)}
              >
                Delete Enquiry
              </button>

              <button
                className="close-btn"
                onClick={() => setSelectedEnquiry(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );

}

export default ContactManagement;