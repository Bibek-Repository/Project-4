import "./EventsCTA.css";
import { useState } from "react";

function EventsCTA() {
  const [email, setEmail] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "${import.meta.env.VITE_API_URL}/api/newsletter",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      alert("Successfully subscribed!");

      setEmail("");
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  };

  return (
    <section className="events-cta">

      <div className="newsletter-box">

        <h2>Stay Updated</h2>

        <p>
          Subscribe to receive the latest AI events,
          workshops, conferences and company updates.
        </p>

        <form onSubmit={handleSubscribe}>

          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
          />

          <button type="submit">
            Subscribe
          </button>

        </form>

      </div>

    </section>
  );
}

export default EventsCTA;