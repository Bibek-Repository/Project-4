import "./UpcomingEvents.css";
import { useEffect, useState } from "react";
import EventRegistrationModal from "./EventRegistrationModal";

function UpcomingEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState(null);
  

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/events`
        );

        const data = await response.json();

        // Include today's events as well
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const upcoming = data
          .filter((event) => {
            const eventDate = new Date(event.eventDate);
            eventDate.setHours(0, 0, 0, 0);
            return eventDate >= today;
          })
          .sort(
            (a, b) =>
              new Date(a.eventDate) -
              new Date(b.eventDate)
          );

        setEvents(upcoming);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <>
      <section className="upcoming-events">
        <h2>Upcoming Events</h2>
        <p>Stay updated with our latest workshops, webinars, and AI sessions</p>

        <div className="upcoming-grid">
          {loading ? (
            <p>Loading...</p>
          ) : events.length === 0 ? (
            <p>No upcoming events.</p>
          ) : (
            events.map((event) => (
              <div className="upcoming-card" key={event._id}>
                <img
                  src={`${import.meta.env.VITE_API_URL}${event.image}`}
                  alt={event.title}
                />

                <div className="upcoming-content">
                  <span>{event.eventType}</span>

                  <h3>{event.title}</h3>

                  <p>{event.description}</p>

                  <div className="event-info">
                    <p>📅 {new Date(event.eventDate).toLocaleDateString()}</p>

                    <p>📍 {event.location}</p>
                  </div>

                  <button onClick={() => setSelectedEvent(event)}>
                    Register
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {selectedEvent && (
  <EventRegistrationModal
    event={selectedEvent}
    onClose={() => setSelectedEvent(null)}
  />
)     }
    </>
  );
}

export default UpcomingEvents;