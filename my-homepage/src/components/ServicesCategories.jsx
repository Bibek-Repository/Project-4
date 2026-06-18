import "./ServiceCategories.css";

function ServiceCategories() {
  return (
    <section className="service-categories">

      <h2>Solutions We Provide</h2>

      <div className="categories-grid">

        <div className="category-card">
          <h3>AI & Automation</h3>

          <ul>
            <li>AI Chatbots</li>
            <li>Virtual Assistants</li>
            <li>Business Automation</li>
          </ul>
        </div>

        <div className="category-card">
          <h3>Software Engineering</h3>

          <ul>
            <li>Web Applications</li>
            <li>Mobile Applications</li>
            <li>Enterprise Systems</li>
          </ul>
        </div>

        <div className="category-card">
          <h3>Data Intelligence</h3>

          <ul>
            <li>Machine Learning</li>
            <li>Data Analytics</li>
            <li>Predictive Models</li>
          </ul>
        </div>

      </div>

    </section>
  );
}

export default ServiceCategories;