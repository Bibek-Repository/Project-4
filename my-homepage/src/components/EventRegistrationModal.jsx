import "./EventRegistrationModal.css";
import { useState } from "react";

function EventRegistrationModal({ event, onClose }) {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    jobTitle: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/event-registrations`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({

            eventId: event._id,

            eventTitle: event.title,

            ...formData,

          }),

        }
      );

      const data = await response.json();

      if (!response.ok) {

        alert(data.message);

        return;

      }

      alert("Successfully registered!");

      onClose();

    } catch (error) {

      console.error(error);

      alert("Something went wrong.");

    }

  };

  return (

    <div
      className="event-modal-overlay"
      onClick={onClose}
    >

      <div
        className="event-modal"
        onClick={(e) => e.stopPropagation()}
      >

        <button
          className="event-close"
          onClick={onClose}
        >
          ×
        </button>

        <h2>

          Register for

          <br />

          {event.title}

        </h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="jobTitle"
            placeholder="Job Title"
            value={formData.jobTitle}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="register-btn"
          >
            Register
          </button>

        </form>

      </div>

    </div>

  );

}

export default EventRegistrationModal;