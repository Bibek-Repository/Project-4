import "./EventsPreview.css";

function EventsPreview() {
  const events = [
    {
      title: "AI Product Launch Webinar",
      date: "June 25, 2026",
      description:
        "Join us for a live demo of our latest AI automation tools and virtual assistant system.",
    },
    {
      title: "Startup AI Workshop",
      date: "July 10, 2026",
      description:
        "Hands-on workshop on building AI-powered prototypes for startups and businesses.",
    },
    {
      title: "Cloud & AI Integration Talk",
      date: "July 22, 2026",
      description:
        "Learn how cloud computing and AI work together to scale modern applications.",
    },
  ];

  return (
    <section className="events-section">
      <div className="events-container">
        <h2 className="events-title">Upcoming Events</h2>
        <p className="events-subtitle">
          Stay updated with our latest workshops, webinars, and AI sessions
        </p>

        <div className="events-grid">
          {events.map((event, index) => (
            <div className="event-card" key={index}>
              <span className="event-date">{event.date}</span>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EventsPreview;