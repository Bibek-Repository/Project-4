import { useEffect, useState } from "react";
import "./FeaturedSolutions.css";

function FeaturedSolutions() {

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchServices = async () => {

      try {

        const response = await fetch(
          "${import.meta.env.VITE_API_URL}/api/services"
        );

        const data = await response.json();

        setServices(data);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }

    };

    fetchServices();

  }, []);

  if (loading) {
    return (
      <section className="featured-solutions">
        <h2>Featured Software Solutions</h2>
        <p>Loading services...</p>
      </section>
    );
  }

  return (
    <section className="featured-solutions">

      <h2>Featured Software Solutions</h2>

      <div className="solution-grid">

        {services.length === 0 ? (

          <p>No services available.</p>

        ) : (

          services.map((service) => (

            <div
              className="solution-card"
              key={service._id}
            >

              <img
                src={
                  service.image
                    ? `${import.meta.env.VITE_API_URL}${service.image}`
                    : "https://picsum.photos/600/400"
                }
                alt={service.title}
              />

              <span className="service-category">
                {service.category}
              </span>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              {service.features?.length > 0 && (

                <ul className="service-features">

                  {service.features.map(
                    (feature, index) => (
                      <li key={index}>
                        {feature}
                      </li>
                    )
                  )}

                </ul>

              )}

            </div>

          ))

        )}

      </div>

    </section>
  );
}

export default FeaturedSolutions;