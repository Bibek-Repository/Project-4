import "./Reviews.css";

function Reviews() {
  return (
    <section className="reviews-page">

      <div className="reviews-header">
        <h1>Customer Ratings & Feedback</h1>
        <p>See what our clients say about AI Solutions</p>
      </div>

      {/* Rating Summary */}
      <div className="rating-summary">

        <div className="rating-box">
          <h2>4.8 / 5</h2>
          <p>Overall Rating</p>
        </div>

        <div className="rating-box">
          <h2>120+</h2>
          <p>Happy Clients</p>
        </div>

        <div className="rating-box">
          <h2>95%</h2>
          <p>Positive Feedback</p>
        </div>

      </div>

      {/* Reviews */}
      <div className="reviews-container">

        <div className="review-card">
          <h3>John Smith</h3>
          <span>⭐⭐⭐⭐⭐</span>
          <p>
            AI Solutions built an amazing chatbot for our business.
            It reduced our support workload by more than 50%.
          </p>
        </div>

        <div className="review-card">
          <h3>Sarah Johnson</h3>
          <span>⭐⭐⭐⭐⭐</span>
          <p>
            Very professional team. The AI automation system saved us
            a lot of time and cost.
          </p>
        </div>

        <div className="review-card">
          <h3>Michael Brown</h3>
          <span>⭐⭐⭐⭐⭐</span>
          <p>
            Excellent communication and delivery. Highly recommended
            for AI-based solutions.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Reviews;