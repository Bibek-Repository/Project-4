import "./TechnologyStack.css";

function TechnologyStack() {

  const tech = [
    "React",
    "Node.js",
    "MongoDB",
    "Python",
    "TensorFlow",
    "AWS",
    "Docker",
    "OpenAI"
  ];

  return (
    <section className="tech-stack">

      <h2>Technologies We Use</h2>

      <div className="tech-grid">

        {tech.map((item,index)=>(
          <div key={index} className="tech-badge">
            {item}
          </div>
        ))}

      </div>

    </section>
  );
}

export default TechnologyStack;