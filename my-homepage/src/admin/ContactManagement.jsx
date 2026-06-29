import { useEffect, useState } from "react";
import AdminLayout from "../components/AdminLayout";
import "./ContactManagement.css";

function ContactManagement() {

  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);

  const token = localStorage.getItem("token");

  // ======================================
  // Fetch Enquiries
  // ======================================

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
          throw new Error(
            "Failed to fetch enquiries."
          );
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

  // ======================================
  // Delete Enquiry
  // ======================================

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

        throw new Error(
          "Failed to delete enquiry."
        );

      }

      setEnquiries((prev) =>
        prev.filter(
          (item) => item._id !== id
        )
      );

      if (
        selectedEnquiry &&
        selectedEnquiry._id === id
      ) {
        setSelectedEnquiry(null);
      }

    } catch (error) {

      console.error(error);

      alert(
        "Unable to delete enquiry."
      );

    }

  };

  // ======================================
  // Loading
  // ======================================

  if (loading) {

    return (

      <AdminLayout>

        <h2>
          Loading enquiries...
        </h2>

      </AdminLayout>

    );

  }

  // ======================================
  // UI
  // ======================================

  return (

    <AdminLayout>

      <div className="contacts-header">

        <div>

          <h1>
            Contact Enquiries
          </h1>

          <p>
            Manage customer enquiries submitted through the website.
          </p>

        </div>

        <input
          type="text"
          placeholder="Search enquiries..."
        />

      </div>

      <div className="contacts-table-container">

        <table className="contacts-table">

          <thead>

            <tr>

              <th>Name</th>

              <th>Email</th>

              <th>Company</th>

              <th>Phone</th>

              <th>Service</th>

              <th>Status</th>

              <th>Date</th>

              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {enquiries.length === 0 ? (

              <tr>

                <td colSpan="8">

                  No enquiries found.

                </td>

              </tr>

            ) : (

              enquiries.map((enquiry) => (

                <tr key={enquiry._id}>

                  <td>

                    {enquiry.name}

                  </td>

                  <td>

                    {enquiry.email}

                  </td>

                  <td>

                    <span className="company-badge">

                      {enquiry.company || "-"}

                    </span>

                  </td>

                  <td>

                    {enquiry.phone || "-"}

                  </td>

                  <td>

                    <span className="service-badge">

                      {enquiry.service || "-"}

                    </span>

                  </td>

                  <td>

                    <span className="status-new">

                      ● New

                    </span>

                  </td>

                  <td>

                    {new Date(
                      enquiry.createdAt
                    ).toLocaleString()}

                  </td>

                  <td>

                    <button
                      className="view-btn"
                      onClick={() =>
                        setSelectedEnquiry(
                          enquiry
                        )
                      }
                    >
                      View
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() =>
                        deleteEnquiry(
                          enquiry._id
                        )
                      }
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

            {selectedEnquiry && (

        <div
          className="contact-modal-overlay"
          onClick={() =>
            setSelectedEnquiry(null)
          }
        >

          <div
            className="contact-modal-content"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <div className="modal-header">

              <h2>
                Enquiry Details
              </h2>

              <button
                className="close-icon"
                onClick={() =>
                  setSelectedEnquiry(null)
                }
              >
                ×
              </button>

            </div>

            <div className="modal-body">

              <div className="detail-row">

                <span>Name</span>

                <strong>
                  {selectedEnquiry.name}
                </strong>

              </div>

              <div className="detail-row">

                <span>Email</span>

                <strong>
                  {selectedEnquiry.email}
                </strong>

              </div>

              <div className="detail-row">

                <span>Company</span>

                <strong>
                  {selectedEnquiry.company || "-"}
                </strong>

              </div>

              <div className="detail-row">

                <span>Phone</span>

                <strong>
                  {selectedEnquiry.phone || "-"}
                </strong>

              </div>

              <div className="detail-row">

                <span>Service</span>

                <strong>
                  {selectedEnquiry.service || "-"}
                </strong>

              </div>

              <div className="detail-row">

                <span>Submitted On</span>

                <strong>
                  {new Date(
                    selectedEnquiry.createdAt
                  ).toLocaleString()}
                </strong>

              </div>

              <div className="message-section">

                <h3>
                  Message
                </h3>

                <div className="message-box">

                  {selectedEnquiry.message}

                </div>

              </div>

            </div>

            <div className="modal-footer">

              <button
                className="delete-btn"
                onClick={() => {
                  deleteEnquiry(
                    selectedEnquiry._id
                  );
                }}
              >
                Delete Enquiry
              </button>

              <button
                className="close-btn"
                onClick={() =>
                  setSelectedEnquiry(null)
                }
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