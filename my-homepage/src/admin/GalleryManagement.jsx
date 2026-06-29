import AdminLayout from "../components/AdminLayout";
import "./GalleryManagement.css";
import { useEffect, useState } from "react";

function GalleryManagement() {

  const token = localStorage.getItem("token");

  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] =
    useState(false);

  const [editingImage, setEditingImage] =
    useState(null);

  const [selectedImage, setSelectedImage] =
    useState(null);

  const [newImage, setNewImage] =
    useState({
      title: "",
      category: ""
    });

  useEffect(() => {

    const fetchGallery = async () => {

      try {

        const response = await fetch(
          "http://localhost:5000/api/gallery"
        );

        const data =
          await response.json();

        setGallery(data);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }

    };

    fetchGallery();

  }, []);

  useEffect(() => {

    if (editingImage) {

      setNewImage({
        title: editingImage.title,
        category: editingImage.category
      });

    }

  }, [editingImage]);

  const resetForm = () => {

    setShowModal(false);

    setEditingImage(null);

    setSelectedImage(null);

    setNewImage({
      title: "",
      category: ""
    });

  };

  const uploadImage = async () => {

    if (!selectedImage) return "";

    const formData =
      new FormData();

    formData.append(
      "image",
      selectedImage
    );

    const response =
      await fetch(
        "http://localhost:5000/api/upload",
        {
          method: "POST",
          headers: {
            Authorization:
              `Bearer ${token}`
          },
          body: formData
        }
      );

    const data =
      await response.json();

    return data.imageUrl;
  };

  const createImage = async (e) => {

    e.preventDefault();

    try {

      const imageUrl =
        await uploadImage();

      const response =
        await fetch(
          "http://localhost:5000/api/gallery",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
              Authorization:
                `Bearer ${token}`
            },
            body: JSON.stringify({
              ...newImage,
              image: imageUrl
            })
          }
        );

      const data =
        await response.json();

      setGallery([
        ...gallery,
        data
      ]);

      resetForm();

    } catch (error) {

      console.log(error);

    }

  };

  const updateImage = async (e) => {

    e.preventDefault();

    try {

      let imageUrl =
        editingImage.image;

      if (selectedImage) {

        imageUrl =
          await uploadImage();

      }

      const response =
        await fetch(
          `http://localhost:5000/api/gallery/${editingImage._id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type":
                "application/json",
              Authorization:
                `Bearer ${token}`
            },
            body: JSON.stringify({
              ...newImage,
              image: imageUrl
            })
          }
        );

      const data =
        await response.json();

      setGallery(
        gallery.map((item) =>
          item._id === data._id
            ? data
            : item
        )
      );

      resetForm();

    } catch (error) {

      console.log(error);

    }

  };

  const deleteImage = async (id) => {

    if (
      !window.confirm(
        "Delete this image?"
      )
    ) return;

    try {

      await fetch(
        `http://localhost:5000/api/gallery/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization:
              `Bearer ${token}`
          }
        }
      );

      setGallery(
        gallery.filter(
          (item) =>
            item._id !== id
        )
      );

    } catch (error) {

      console.log(error);

    }

  };

  if (loading) {

    return (
      <AdminLayout>
        <h2>Loading gallery...</h2>
      </AdminLayout>
    );

  }

  return (
    <AdminLayout>

      <div className="gallery-header">

        <h1>Gallery Management</h1>

        <button
          className="add-gallery-btn"
          onClick={() =>
            setShowModal(true)
          }
        >
          + Add Image
        </button>

      </div>

      <div className="gallery-table-container">

        <table className="gallery-table">

          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {gallery.map((item) => (

              <tr key={item._id}>

                <td>

                  <img
                    src={`http://localhost:5000${item.image}`}
                    alt={item.title}
                    className="gallery-thumbnail"
                  />

                </td>

                <td>{item.title}</td>

                <td>{item.category}</td>

                <td>

                  <button
                    className="edit-btn"
                    onClick={() => {
                      setEditingImage(item);
                      setShowModal(true);
                    }}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      deleteImage(item._id)
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

      {(showModal || editingImage) && (

        <div className="gallery-modal-overlay">

          <div className="gallery-modal-content">

            <h2>
              {editingImage
                ? "Edit Image"
                : "Add Image"}
            </h2>

            <form
              onSubmit={
                editingImage
                  ? updateImage
                  : createImage
              }
            >

              <input
                type="text"
                placeholder="Image Title"
                value={newImage.title}
                onChange={(e) =>
                  setNewImage({
                    ...newImage,
                    title:
                      e.target.value
                  })
                }
                required
              />

              <input
                type="text"
                placeholder="Category"
                value={newImage.category}
                onChange={(e) =>
                  setNewImage({
                    ...newImage,
                    category:
                      e.target.value
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
                {editingImage
                  ? "Update Image"
                  : "Upload Image"}
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

export default GalleryManagement;