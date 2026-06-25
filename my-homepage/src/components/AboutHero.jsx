import "../pages/About.css";

function AboutHero() {
  return (
    <section className="about-hero">
      <div className="hero-text">
        <h1>We Build AI-Powered Digital Solutions</h1>
        <p>
          AI Solutions is a modern tech company specializing in AI,
          automation, and scalable web applications for global businesses.
        </p>

         <div class="overview-container">
            
            <div class="overview-box">
              <div class="icon">🤖</div>
              <h3>AI Development</h3>
              
            </div>

            <div class="overview-box">
              <div class="icon">⚙️</div>
              <h3>Automation Systems</h3>
              
            </div>

            <div class="overview-box">
              <div class="icon">🌐</div>
              <h3>Scalable Web Apps</h3>
              
            </div>

          </div>
      </div>

      <img
        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
        alt="AI Team"
      />
    </section>
  );
}

export default AboutHero;