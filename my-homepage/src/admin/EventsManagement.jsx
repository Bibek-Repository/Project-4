import AdminLayout from "../components/AdminLayout";
import "./EventsManagement.css";

function EventsManagement() {
  const events = [
    {
      id: 1,
      title: "AI Innovation Summit",
      date: "12 Jun 2026",
      location: "Kathmandu"
    },
    {
      id: 2,
      title: "Machine Learning Workshop",
      date: "20 Jul 2026",
      location: "Pokhara"
    }
  ];

  return (
    <AdminLayout>

      <div className="events-header">

        <h1>Events Management</h1>

        <button className="add-event-btn">
          + Add Event
        </button>

      </div>

      <div className="events-table-container">

        <table className="events-table">

          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Location</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {events.map((event) => (
              <tr key={event.id}>

                <td>{event.title}</td>
                <td>{event.date}</td>
                <td>{event.location}</td>

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

export default EventsManagement;