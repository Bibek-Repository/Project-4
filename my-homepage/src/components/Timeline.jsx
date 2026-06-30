import "./Timeline.css";
import { useEffect, useState } from "react";

function Timeline() {

  const [pastEvents, setPastEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchEvents = async () => {

      try {

        const response = await fetch(
          "${import.meta.env.VITE_API_URL}/api/events"
        );

        const data = await response.json();

        const today = new Date();

        const completed = data

          .filter(
            (event) =>
              new Date(event.eventDate) < today
          )

          .sort(
            (a, b) =>
              new Date(b.eventDate) -
              new Date(a.eventDate)
          );

        setPastEvents(completed);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }

    };

    fetchEvents();

  }, []);

  return (

    <section className="timeline-section">

      <h2>Past Events</h2>

      {loading ? (

        <p className="timeline-loading">
          Loading events...
        </p>

      ) : pastEvents.length === 0 ? (

        <p className="timeline-loading">
          No past events yet.
        </p>

      ) : (

        <div className="timeline">

          {pastEvents.map((event) => (

            <div
              className="timeline-item"
              key={event._id}
            >

              <div className="timeline-date">

                {new Date(
                  event.eventDate
                ).toLocaleDateString()}

              </div>

              <div className="timeline-content">

                {event.image && (

                  <img
                    src={`${import.meta.env.VITE_API_URL}${event.image}`}
                    alt={event.title}
                    className="timeline-image"
                  />

                )}

                <h3>{event.title}</h3>

                <p>{event.description}</p>

                <span className="timeline-location">

                  📍 {event.location}

                </span>

                <span className="timeline-type">

                  {event.eventType}

                </span>

              </div>

            </div>

          ))}

        </div>

      )}

    </section>

  );

}

export default Timeline;