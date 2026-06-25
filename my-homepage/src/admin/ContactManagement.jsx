import AdminLayout from "../components/AdminLayout";
import "./ContactManagement.css";
import { useEffect, useState } from "react";

function ContactManagement() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedEnquiry, setSelectedEnquiry] =
  useState(null);
  const token = localStorage.getItem("token");

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
          throw new Error("Failed to fetch enquiries");
        }

        const data = await response.json();
        setEnquiries(data);
      } catch (error) {
        console.error("Error fetching enquiries:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEnquiries();
  }, [token]);

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
        throw new Error("Failed to delete enquiry");
      }

      setEnquiries((prevEnquiries) =>
        prevEnquiries.filter(
          (enquiry) => enquiry._id !== id
        )
      );
    } catch (error) {
      console.error("Error deleting enquiry:", error);
      alert("Failed to delete enquiry.");
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <h2>Loading enquiries...</h2>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="contacts-header">
        <h1>Contact Enquiries</h1>

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
              <th>Phone</th>
              <th>Subject</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {enquiries.length === 0 ? (
              <tr>
                <td colSpan="7">
                  No enquiries found.
                </td>
              </tr>
            ) : (
              enquiries.map((enquiry) => (
                <tr key={enquiry._id}>
                  <td>{enquiry.name}</td>

                  <td>{enquiry.email}</td>

                  <td>{enquiry.phone}</td>

                  <td>{enquiry.subject}</td>

                  <td>
                    <span className="status-new">
                      New
                    </span>
                  </td>

                  <td>
                    {new Date(
                      enquiry.createdAt
                    ).toLocaleDateString()}
                  </td>

                  <td>
                    <button
                      className="view-btn"
                      onClick={() =>
                        setSelectedEnquiry(enquiry)
                      }
                    >
                      View
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() =>
                        deleteEnquiry(enquiry._id)
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
    className="modal-overlay"
    onClick={() =>
      setSelectedEnquiry(null)
    }
  >

    <div
      className="modal-content"
      onClick={(e) =>
        e.stopPropagation()
      }
    >

      <h2>Enquiry Details</h2>

      <p>
        <strong>Name:</strong>
        {" "}
        {selectedEnquiry.name}
      </p>

      <p>
        <strong>Email:</strong>
        {" "}
        {selectedEnquiry.email}
      </p>

      <p>
        <strong>Phone:</strong>
        {" "}
        {selectedEnquiry.phone}
      </p>

      <p>
        <strong>Subject:</strong>
        {" "}
        {selectedEnquiry.subject}
      </p>

      <p>
        <strong>Message:</strong>
      </p>

      <div className="message-box">
        {selectedEnquiry.message}
      </div>

      <p>
        <strong>Date:</strong>
        {" "}
        {new Date(
          selectedEnquiry.createdAt
        ).toLocaleString()}
      </p>

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

)}
    </AdminLayout>
  );
}

export default ContactManagement;
