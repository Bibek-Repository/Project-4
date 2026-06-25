import AdminLayout from "../components/AdminLayout";
import "./ServicesManagement.css";
import { useEffect, useState } from "react";

function ServicesManagement() {
  const token = localStorage.getItem("token");

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedImage, setSelectedImage] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const [editingService, setEditingService] = useState(null);

  const [newService, setNewService] = useState({
    title: "",
    category: "",
    description: "",
    features: []
  });

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/services",
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [token]);

  useEffect(() => {
    if (editingService) {
      setNewService({
        title: editingService.title || "",
        category: editingService.category || "",
        description: editingService.description || "",
        features: editingService.features || []
      });
    }
  }, [editingService]);

  const resetForm = () => {
    setShowModal(false);
    setEditingService(null);
    setSelectedImage(null);

    setNewService({
      title: "",
      category: "",
      description: "",
      features: []
    });
  };

  const deleteService = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this service?"
    );

    if (!confirmDelete) return;

    try {
      await fetch(
        `http://localhost:5000/api/services/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setServices((prev) =>
        prev.filter((service) => service._id !== id)
      );
    } catch (error) {
      console.log(error);
    }
  };

  const uploadImage = async () => {
    if (!selectedImage) return "";

    const imageFormData = new FormData();

    imageFormData.append(
      "image",
      selectedImage
    );

    const uploadResponse = await fetch(
      "http://localhost:5000/api/upload",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: imageFormData
      }
    );

    const uploadData =
      await uploadResponse.json();

    return uploadData.imageUrl;
  };

  const createService = async (e) => {
    e.preventDefault();

    try {
      const imageUrl =
        await uploadImage();

      const response = await fetch(
        "http://localhost:5000/api/services",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
            Authorization:
              `Bearer ${token}`
          },
          body: JSON.stringify({
            ...newService,
            image: imageUrl
          })
        }
      );

      const data =
        await response.json();

      setServices((prev) => [
        ...prev,
        data
      ]);

      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  const updateService = async (e) => {
    e.preventDefault();

    try {
      let imageUrl =
        editingService.image || "";

      if (selectedImage) {
        imageUrl =
          await uploadImage();
      }

      const response = await fetch(
        `http://localhost:5000/api/services/${editingService._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type":
              "application/json",
            Authorization:
              `Bearer ${token}`
          },
          body: JSON.stringify({
            ...newService,
            image: imageUrl
          })
        }
      );

      const data =
        await response.json();

      setServices(
        services.map((service) =>
          service._id === data._id
            ? data
            : service
        )
      );

      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <h2>Loading services...</h2>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="services-header">
        <h1>Services Management</h1>

        <button
          className="add-service-btn"
          onClick={() =>
            setShowModal(true)
          }
        >
          + Add Service
        </button>
      </div>

      <div className="services-table-container">
        <table className="services-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Category</th>
              <th>Created</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {services.map((service) => (
              <tr key={service._id}>
                <td>
                  {service.image ? (
                    <img
                      src={`http://localhost:5000${service.image}`}
                      alt={service.title}
                      className="service-thumbnail"
                    />
                  ) : (
                    "No Image"
                  )}
                </td>

                <td>{service.title}</td>

                <td>
                  {service.category}
                </td>

                <td>
                  {new Date(
                    service.createdAt
                  ).toLocaleDateString()}
                </td>

                <td>
                  <button
                    className="edit-btn"
                    onClick={() => {
                      setEditingService(
                        service
                      );
                      setShowModal(true);
                    }}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      deleteService(
                        service._id
                      )
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {(showModal || editingService) && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>
              {editingService
                ? "Edit Service"
                : "Add Service"}
            </h2>

            <form
              onSubmit={
                editingService
                  ? updateService
                  : createService
              }
            >
              <input
                type="text"
                placeholder="Service Title"
                value={newService.title}
                onChange={(e) =>
                  setNewService({
                    ...newService,
                    title:
                      e.target.value
                  })
                }
                required
              />

              <select
                value={
                  newService.category
                }
                onChange={(e) =>
                  setNewService({
                    ...newService,
                    category:
                      e.target.value
                  })
                }
                required
              >
                <option value="">
                  Select Category
                </option>

                <option value="AI & Automation">
                  AI & Automation
                </option>

                <option value="Software Engineering">
                  Software Engineering
                </option>

                <option value="Data Intelligence">
                  Data Intelligence
                </option>

                <option value="Cloud & Devops">
                  Cloud & Devops
                </option>
              </select>

              <textarea
                placeholder="Description"
                value={
                  newService.description
                }
                onChange={(e) =>
                  setNewService({
                    ...newService,
                    description:
                      e.target.value
                  })
                }
              />

              <input
                type="text"
                placeholder="Features (comma separated)"
                value={newService.features.join(
                  ", "
                )}
                onChange={(e) =>
                  setNewService({
                    ...newService,
                    features:
                      e.target.value
                        .split(",")
                        .map((item) =>
                          item.trim()
                        )
                  })
                }
              />

              <input
                type="file"
                onChange={(e) =>
                  setSelectedImage(
                    e.target.files[0]
                  )
                }
              />

              <button type="submit">
                {editingService
                  ? "Update Service"
                  : "Create Service"}
              </button>

              <button
                type="button"
                onClick={resetForm}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}

export default ServicesManagement;