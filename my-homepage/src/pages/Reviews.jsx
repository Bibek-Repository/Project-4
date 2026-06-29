import "./Reviews.css";
import {
  FaStar,
  FaQuoteRight,
  FaArrowRight,
  FaRocket,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const reviews = [
  {
    name: "Jack Mooneyham",
    position: "Chief Executive Officer",
    company: "HealthFirst",
    industry: "Healthcare",
    review:
      "AI SOLUTIONS completely transformed how we manage patient operations. Their automation platform reduced administrative workload by nearly 40% while improving the overall experience for both staff and patients.",
  },
  {
    name: "Neha Patel",
    position: "Head of Data & Analytics",
    company: "InsightIQ",
    industry: "Analytics",
    review:
      "The predictive analytics solution developed by AI SOLUTIONS gives our team incredible visibility into business trends. We now make faster, data-driven decisions with much greater confidence.",
  },
  {
    name: "Mark Singh",
    position: "Chief Operating Officer",
    company: "StayPro",
    industry: "Hospitality",
    review:
      "From planning to deployment, every stage of the project was handled professionally. Their AI assistant dramatically improved guest response times and increased customer satisfaction.",
  },
  {
    name: "Sneha Choudhary",
    position: "Operations Director",
    company: "FinAxis",
    industry: "Finance",
    review:
      "Working with AI SOLUTIONS has been one of our best technology investments. Their intelligent workflow automation streamlined internal processes and significantly boosted productivity.",
  },
  {
    name: "David Dawson",
    position: "Chief Technology Officer",
    company: "InspectAI",
    industry: "Manufacturing",
    review:
      "Their computer vision solution helped us identify product defects in real time. Manual inspections were reduced dramatically while maintaining exceptional quality standards.",
  },
  {
    name: "Priya Wadhwa",
    position: "Vice President of Technology",
    company: "RetailNova",
    industry: "Retail",
    review:
      "The expertise and support provided by AI SOLUTIONS exceeded our expectations. Their AI-powered recommendation engine improved customer engagement and increased online sales.",
  },
];

function Reviews() {
  return (
    <section className="reviews">

      {/* ================= HERO ================= */}

      <div className="reviews-title">

        <span className="section-tag">
          CLIENT REVIEWS
        </span>

        <h1>
          Trusted by <span>Leaders.</span>
          <br />
          Driven by <span>Results.</span>
        </h1>

        <p>
          Discover how organizations across industries are using
          AI SOLUTIONS to automate operations, improve decision-making,
          and accelerate business growth through intelligent technology.
        </p>

      </div>

      {/* ================= STATS ================= */}

      <div className="stats-cards">

        <div className="stat-card">

          <div className="stat-icon">
            <FaStar />
          </div>

          <h2>5.0</h2>

          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>

          <p>Average Client Rating</p>

        </div>

        <div className="stat-divider"></div>

        <div className="stat-card">

          <div className="stat-icon">
            <FaUsers />
          </div>

          <h2>150+</h2>

          <p>Enterprise Clients Worldwide</p>

        </div>

        <div className="stat-divider"></div>

        <div className="stat-card">

          <div className="stat-icon">
            <FaChartLine />
          </div>

          <h2>98%</h2>

          <p>Client Retention Rate</p>

        </div>

      </div>

      {/* ================= TESTIMONIALS ================= */}

      <div className="reviews-grid">

        {reviews.map((review, index) => (

          <div className="review-card" key={index}>

            <div className="review-top">

              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <FaQuoteRight className="quote-icon" />

            </div>

            <p className="review-text">
              {review.review}
            </p>

            <div className="review-line"></div>

            <div className="review-footer">

              <div className="avatar">
                {review.name
                  .split(" ")
                  .map((word) => word[0])
                  .join("")}
              </div>

              <div className="review-info">

                <h3>{review.name}</h3>

                <span>{review.position}</span>

                <small>{review.company}</small>

              </div>

              <div className="industry-badge">
                {review.industry}
              </div>

            </div>

          </div>

        ))}
      </div>

      {/* ================= CTA ================= */}

            <div className="reviews-cta">

        <div className="cta-icon">
          <FaRocket />
        </div>

        <div className="cta-content">

          <h2>
            Ready to Achieve
            <br />
            More with <span>AI?</span>
          </h2>

          <p>
            Let's discuss your goals and build an AI strategy that
            drives measurable business impact. Whether you're looking
            to automate workflows, deploy intelligent assistants, or
            unlock insights from your data, our team is here to help.
          </p>

        </div>

        <div className="cta-buttons">

          <Link to="/Contact" className="cta-button">
        Book a Consultation
      </Link>

          <Link to="/Contact" className="cta-button">
        Contact Us
      </Link>

        </div>

      </div>

    </section>
  );
}

export default Reviews;