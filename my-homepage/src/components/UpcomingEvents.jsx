import "./UpcomingEvents.css";
import { useEffect, useState } from "react";

function UpcomingEvents() {

  const [events, setEvents] = useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const fetchEvents = async () => {

      try {

        const response =
          await fetch(
            "http://localhost:5000/api/events"
          );

        const data =
          await response.json();

        const upcoming = data

          .filter(
  (event) =>
    new Date(event.eventDate) >= new Date()
)

          .sort(
            (a, b) =>
              new Date(
                a.eventDate
              ) -
              new Date(
                b.eventDate
              )
          );

        setEvents(upcoming);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }

    };

    fetchEvents();

  }, []);

  return (

    <section className="upcoming-events">

      <h2>

        Upcoming Events

      </h2>

      <div className="upcoming-grid">

        {loading ? (

          <p>
            Loading...
          </p>

        ) : events.length === 0 ? (

          <p>

            No upcoming events.

          </p>

        ) : (

          events.map((event) => (

            <div
              className="upcoming-card"
              key={event._id}
            >

              <img
                src={`http://localhost:5000${event.image}`}
                alt={event.title}
              />

              <div className="upcoming-content">

                <span>

                  {event.eventType}

                </span>

                <h3>

                  {event.title}

                </h3>

                <p>

                  {event.description}

                </p>

                <div className="event-info">

                  <p>

                    📅{" "}
                    {new Date(
                      event.eventDate
                    ).toLocaleDateString()}

                  </p>

                  <p>

                    📍{" "}
                    {event.location}

                  </p>

                </div>

                <button>

                  Register

                </button>

              </div>

            </div>

          ))

        )}

      </div>

    </section>

  );

}

export default UpcomingEvents;