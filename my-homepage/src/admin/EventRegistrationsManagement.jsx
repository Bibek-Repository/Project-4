import { useEffect, useState } from "react";
import AdminLayout from "../components/AdminLayout";
import "./EventRegistrationsManagement.css";

function EventRegistrationsManagement() {

  const [registrations, setRegistrations] = useState([]);
  const [filteredRegistrations, setFilteredRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRegistration, setSelectedRegistration] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const token = localStorage.getItem("token");

  // =============================
  // Fetch Registrations
  // =============================

  useEffect(() => {

    const fetchRegistrations = async () => {

      try {

        const response = await fetch(
          "${import.meta.env.VITE_API_URL}/api/event-registrations",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(
            "Failed to fetch registrations."
          );
        }

        const data = await response.json();

        setRegistrations(data);
        setFilteredRegistrations(data);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }

    };

    fetchRegistrations();

  }, [token]);

  // =============================
  // Search
  // =============================

  useEffect(() => {

    const filtered = registrations.filter((registration) =>

      registration.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||

      registration.email
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||

      registration.eventTitle
        .toLowerCase()
        .includes(searchTerm.toLowerCase())

    );

    setFilteredRegistrations(filtered);

  }, [searchTerm, registrations]);

  // =============================
  // Delete Registration
  // =============================

  const deleteRegistration = async (id) => {

    const confirmDelete = window.confirm(
      "Delete this registration?"
    );

    if (!confirmDelete) return;

    try {

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/event-registrations/${id}`,
        {
          method: "DELETE",

          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {

        throw new Error(
          "Delete failed."
        );

      }

      const updated = registrations.filter(
        (item) => item._id !== id
      );

      setRegistrations(updated);
      setFilteredRegistrations(updated);

      if (
        selectedRegistration &&
        selectedRegistration._id === id
      ) {
        setSelectedRegistration(null);
      }

    } catch (error) {

      console.error(error);

      alert(
        "Unable to delete registration."
      );

    }

  };

  if (loading) {

    return (

      <AdminLayout>

        <h2>
          Loading registrations...
        </h2>

      </AdminLayout>

    );

  }

    return (

    <AdminLayout>

      <div className="registrations-header">

        <div>

          <h1>
            Event Registrations
          </h1>

          <p>
            Manage registrations submitted through the website.
          </p>

        </div>

        <input
          type="text"
          placeholder="Search registrations..."
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
        />

      </div>

      <div className="registrations-table-container">

        <table className="registrations-table">

          <thead>

            <tr>

              <th>Name</th>

              <th>Event</th>

              <th>Company</th>

              <th>Email</th>

              <th>Date</th>

              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {filteredRegistrations.length === 0 ? (

              <tr>

                <td colSpan="6">

                  No registrations found.

                </td>

              </tr>

            ) : (

              filteredRegistrations.map((registration) => (

                <tr key={registration._id}>

                  <td>

                    {registration.name}

                  </td>

                  <td>

                    <span className="event-badge">

                      {registration.eventTitle}

                    </span>

                  </td>

                  <td>

                    {registration.company}

                  </td>

                  <td>

                    {registration.email}

                  </td>

                  <td>

                    {new Date(
                      registration.createdAt
                    ).toLocaleDateString()}

                  </td>

                  <td>

                    <button
                      className="view-btn"
                      onClick={() =>
                        setSelectedRegistration(
                          registration
                        )
                      }
                    >
                      View
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() =>
                        deleteRegistration(
                          registration._id
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

            {selectedRegistration && (

        <div
          className="registration-modal-overlay"
          onClick={() =>
            setSelectedRegistration(null)
          }
        >

          <div
            className="registration-modal-content"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <div className="modal-header">

              <h2>
                Registration Details
              </h2>

              <button
                className="close-icon"
                onClick={() =>
                  setSelectedRegistration(null)
                }
              >
                ×
              </button>

            </div>

            <div className="modal-body">

              <div className="detail-row">

                <span>Full Name</span>

                <strong>

                  {selectedRegistration.name}

                </strong>

              </div>

              <div className="detail-row">

                <span>Email</span>

                <strong>

                  {selectedRegistration.email}

                </strong>

              </div>

              <div className="detail-row">

                <span>Phone</span>

                <strong>

                  {selectedRegistration.phone}

                </strong>

              </div>

              <div className="detail-row">

                <span>Company</span>

                <strong>

                  {selectedRegistration.company}

                </strong>

              </div>

              <div className="detail-row">

                <span>Country</span>

                <strong>

                  {selectedRegistration.country}

                </strong>

              </div>

              <div className="detail-row">

                <span>Job Title</span>

                <strong>

                  {selectedRegistration.jobTitle}

                </strong>

              </div>

              <div className="detail-row">

                <span>Registered Event</span>

                <strong>

                  {selectedRegistration.eventTitle}

                </strong>

              </div>

              <div className="detail-row">

                <span>Registered On</span>

                <strong>

                  {new Date(
                    selectedRegistration.createdAt
                  ).toLocaleString()}

                </strong>

              </div>

            </div>

            <div className="modal-footer">

              <button
                className="delete-btn"
                onClick={() =>
                  deleteRegistration(
                    selectedRegistration._id
                  )
                }
              >
                Delete Registration
              </button>

              <button
                className="close-btn"
                onClick={() =>
                  setSelectedRegistration(null)
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

export default EventRegistrationsManagement;