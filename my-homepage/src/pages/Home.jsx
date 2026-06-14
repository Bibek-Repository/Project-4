import Hero from "../components/Hero";
import Features from "../components/Features";
import Stats from "../components/Stats";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import FeaturedProjects from "../components/FeaturedProjects";
import Testimonials from "../components/Testimonials";
import EventsPreview from "../components/EventsPreview";
import BlogPreview from "../components/BlogPreview";
import CTA from "../components/CTA";


function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <WhyChooseUs />
      <FeaturedProjects />
      <Testimonials />
      <EventsPreview />
      <BlogPreview />
      <CTA />
      
    </>
  );
}

export default Home;

