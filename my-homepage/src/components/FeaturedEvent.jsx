import "./FeaturedEvent.css";
import { useEffect, useState } from "react";

function FeaturedEvent() {

  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchFeaturedEvent = async () => {

      try {

        const response = await fetch(
          "http://localhost:5000/api/events"
        );

        const data = await response.json();

        const featured = data
          .filter(
            (item) =>
              item.featured &&
              item.status !== "Completed"
          )
          .sort(
            (a, b) =>
              new Date(a.eventDate) -
              new Date(b.eventDate)
          )[0];

        setEvent(featured);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }

    };

    fetchFeaturedEvent();

  }, []);

  if (loading) {

    return (
      <section className="featured-event">

        <h2>Loading featured event...</h2>

      </section>
    );

  }

  if (!event) {

    return null;

  }

  return (

    <section className="featured-event">

      <div className="featured-image">

        <img
          src={`http://localhost:5000${event.image}`}
          alt={event.title}
        />

      </div>

      <div className="featured-content">

        <span>⭐ Featured Event</span>

        <h2>{event.title}</h2>

        <p>{event.description}</p>

        <ul>

          <li>
            📅{" "}
            {new Date(
              event.eventDate
            ).toLocaleDateString()}
          </li>

          <li>
            📍 {event.location}
          </li>

          <li>
            🏷 {event.eventType}
          </li>

          <li>
            🚀 {event.status}
          </li>

        </ul>

        <button>

          Register Now

        </button>

      </div>

    </section>

  );

}

export default FeaturedEvent;