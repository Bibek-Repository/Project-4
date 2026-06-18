import AdminLayout from "../components/AdminLayout";
import "./ServicesManagement.css";

function ServicesManagement() {

  const services = [
    {
      id: 1,
      name: "AI Virtual Assistant",
      status: "Active"
    },
    {
      id: 2,
      name: "Web Development",
      status: "Active"
    },
    {
      id: 3,
      name: "Cloud Solutions",
      status: "Inactive"
    }
  ];

  return (
    <AdminLayout>

      <div className="services-header">

        <h1>Services Management</h1>

        <button className="add-service-btn">
          + Add Service
        </button>

      </div>

      <div className="services-table-container">

        <table className="services-table">

          <thead>
            <tr>
              <th>Service Name</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {services.map((service) => (
              <tr key={service.id}>

                <td>{service.name}</td>

                <td>
                  <span
                    className={
                      service.status === "Active"
                        ? "active-status"
                        : "inactive-status"
                    }
                  >
                    {service.status}
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

export default ServicesManagement;