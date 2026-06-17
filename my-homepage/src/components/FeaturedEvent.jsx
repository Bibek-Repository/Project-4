import "./FeaturedEvent.css";

function FeaturedEvent() {
  return (
    <section className="featured-event">

      <div className="featured-image">
        <img
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200"
          alt="AI Summit"
        />
      </div>

      <div className="featured-content">

        <span>Featured Event</span>

        <h2>AI Innovation Summit 2026</h2>

        <p>
          Join industry leaders, developers and entrepreneurs
          to explore the future of artificial intelligence.
        </p>

        <ul>
          <li>✔ AI Keynote Sessions</li>
          <li>✔ Startup Networking</li>
          <li>✔ Live Product Demonstrations</li>
          <li>✔ Hands-On Workshops</li>
        </ul>

        <button>Register Now</button>

      </div>

    </section>
  );
}

export default FeaturedEvent;