import AdminLayout from "../components/AdminLayout";
import "./ContactManagement.css";

function ContactManagement() {

  const enquiries = [
    {
      id: 1,
      name: "Ramesh Baiju",
      email: "ramesh@gmail.com",
      status: "New",
      date: "17 Jun 2026"
    },
    {
      id: 2,
      name: "Jyoti Baiju",
      email: "Jyoti@gmail.com",
      status: "Read",
      date: "16 Jun 2026"
    },
    {
      id: 3,
      name: "Ram prasad",
      email: "ramprasad@gmail.com",
      status: "New",
      date: "15 Jun 2026"
    }
  ];

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
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {enquiries.map((enquiry) => (
              <tr key={enquiry.id}>

                <td>{enquiry.name}</td>
                <td>{enquiry.email}</td>
                <td>
                  <span
                    className={
                      enquiry.status === "New"
                        ? "status-new"
                        : "status-read"
                    }
                  >
                    {enquiry.status}
                  </span>
                </td>

                <td>{enquiry.date}</td>

                <td>
                  <button className="view-btn">
                    View
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

export default ContactManagement;