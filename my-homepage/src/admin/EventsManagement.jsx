import AdminLayout from "../components/AdminLayout";
import "./EventsManagement.css";
import { useEffect, useState } from "react";

function EventsManagement() {
  const token = localStorage.getItem("token");

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);

  const [selectedImage, setSelectedImage] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");

  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    eventDate: "",
    location: "",
    eventType: "Workshop",
    featured: false,
    status: "Upcoming",
  });

  useEffect(() => {
    fetchEvents();
  }, []);

  useEffect(() => {
    if (editingEvent) {
      setNewEvent({
        title: editingEvent.title || "",
        description: editingEvent.description || "",
        eventDate: editingEvent.eventDate
          ? editingEvent.eventDate.substring(0, 10)
          : "",
        location: editingEvent.location || "",
        eventType: editingEvent.eventType || "Workshop",
        featured: editingEvent.featured || false,
        status: editingEvent.status || "Upcoming",
      });
    }
  }, [editingEvent]);

  const fetchEvents = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "${import.meta.env.VITE_API_URL}/api/events",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      data.sort(
        (a, b) =>
          new Date(a.eventDate) -
          new Date(b.eventDate)
      );

      setEvents(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const uploadImage = async () => {
    if (!selectedImage) return "";

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

    const data = await response.json();

    return data.imageUrl;
  };

  const createEvent = async (e) => {
    e.preventDefault();

    try {
      const imageUrl = await uploadImage();

      const response = await fetch(
        "${import.meta.env.VITE_API_URL}/api/events",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            ...newEvent,
            image: imageUrl,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create event");
      }

      await fetchEvents();

      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  const updateEvent = async (e) => {
    e.preventDefault();

    try {
      let imageUrl = editingEvent.image;

      if (selectedImage) {
        imageUrl = await uploadImage();
      }

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/events/${editingEvent._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            ...newEvent,
            image: imageUrl,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update event");
      }

      await fetchEvents();

      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteEvent = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this event?"
    );

    if (!confirmDelete) return;

    try {
      await fetch(
        `${import.meta.env.VITE_API_URL}/api/events/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      await fetchEvents();
    } catch (error) {
      console.log(error);
    }
  };

  const resetForm = () => {
    setShowModal(false);
    setEditingEvent(null);
    setSelectedImage(null);

    setNewEvent({
      title: "",
      description: "",
      eventDate: "",
      location: "",
      eventType: "Workshop",
      featured: false,
      status: "Upcoming",
    });
  };

  const filteredEvents = events.filter((event) =>
    event.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <AdminLayout>
        <h2>Loading Events...</h2>
      </AdminLayout>
    );
  }
    

  return (
  <AdminLayout>
    <div className="events-management">

      <div className="events-header">
        <h1>Events Management</h1>

        <div className="events-actions">
          <input
            type="text"
            placeholder="Search events..."
            className="search-input"
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
          />

          <button
            className="add-event-btn"
            onClick={() => {
              resetForm();
              setShowModal(true);
            }}
          >
            + Add Event
          </button>
        </div>
      </div>

      <div className="events-table-container">
        <table className="events-table">

          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Date</th>
              <th>Location</th>
              <th>Type</th>
              <th>Status</th>
              <th>Featured</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {filteredEvents.length === 0 ? (

              <tr>
                <td colSpan="8" className="empty-table">
                  No events found.
                </td>
              </tr>

            ) : (

              filteredEvents.map((event) => (

                <tr key={event._id}>

                  <td>

                    {event.image ? (

                      <img
                        src={`${import.meta.env.VITE_API_URL}${event.image}`}
                        alt={event.title}
                        className="table-image"
                      />

                    ) : (

                      <div className="no-image">
                        No Image
                      </div>

                    )}

                  </td>

                  <td>{event.title}</td>

                  <td>
                    {new Date(
                      event.eventDate
                    ).toLocaleDateString()}
                  </td>

                  <td>{event.location}</td>

                  <td>{event.eventType}</td>

                  <td>
                    <span
                      className={`status ${event.status.toLowerCase()}`}
                    >
                      {event.status}
                    </span>
                  </td>

                  <td>

                    {event.featured ? (

                      <span className="featured">
                        ⭐ Yes
                      </span>

                    ) : (

                      "No"

                    )}

                  </td>

                  <td>

                    <button
                      className="edit-btn"
                      onClick={() => {
                        setEditingEvent(event);
                        setShowModal(true);
                      }}
                    >
                      Edit
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() =>
                        deleteEvent(event._id)
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

      {(showModal || editingEvent) && (

        <div className="events-modal-overlay">

          <div className="events-modal-content">

            <h2>

              {editingEvent
                ? "Edit Event"
                : "Create Event"}

            </h2>

            <form
              onSubmit={
                editingEvent
                  ? updateEvent
                  : createEvent
              }
            >

              <input
                type="text"
                placeholder="Event Title"
                value={newEvent.title}
                onChange={(e) =>
                  setNewEvent({
                    ...newEvent,
                    title: e.target.value,
                  })
                }
                required
              />

              <textarea
                placeholder="Description"
                rows="5"
                value={newEvent.description}
                onChange={(e) =>
                  setNewEvent({
                    ...newEvent,
                    description:
                      e.target.value,
                  })
                }
              />

              <input
                type="date"
                value={newEvent.eventDate}
                onChange={(e) =>
                  setNewEvent({
                    ...newEvent,
                    eventDate:
                      e.target.value,
                  })
                }
                required
              />

              <input
                type="text"
                placeholder="Location"
                value={newEvent.location}
                onChange={(e) =>
                  setNewEvent({
                    ...newEvent,
                    location:
                      e.target.value,
                  })
                }
                required
              />

              <select
                value={newEvent.eventType}
                onChange={(e) =>
                  setNewEvent({
                    ...newEvent,
                    eventType:
                      e.target.value,
                  })
                }
              >
                <option>Workshop</option>
                <option>Conference</option>
                <option>Training</option>
                <option>Webinar</option>
                <option>Product Launch</option>
              </select>

              <select
                value={newEvent.status}
                onChange={(e) =>
                  setNewEvent({
                    ...newEvent,
                    status:
                      e.target.value,
                  })
                }
              >
                <option>Upcoming</option>
                <option>Ongoing</option>
                <option>Completed</option>
              </select>

              <label className="checkbox-label">

                <input
                  type="checkbox"
                  checked={newEvent.featured}
                  onChange={(e) =>
                    setNewEvent({
                      ...newEvent,
                      featured:
                        e.target.checked,
                    })
                  }
                />

                Featured Event

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

              {selectedImage && (

                <img
                  src={URL.createObjectURL(
                    selectedImage
                  )}
                  alt="Preview"
                  className="preview-image"
                />

              )}

              {!selectedImage &&
                editingEvent?.image && (

                  <img
                    src={`${import.meta.env.VITE_API_URL}${editingEvent.image}`}
                    alt="Current"
                    className="preview-image"
                  />

              )}

              <div className="modal-buttons">

                <button
                  type="submit"
                  className="save-btn"
                >
                  {editingEvent
                    ? "Update Event"
                    : "Create Event"}
                </button>

                <button
                  type="button"
                  className="cancel-btn"
                  onClick={resetForm}
                >
                  Cancel
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </div>
  </AdminLayout>
);
}

export default EventsManagement;
