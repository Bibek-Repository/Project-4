import EventsHero from "../components/EventsHero";
import FeaturedEvent from "../components/FeaturedEvent";
import UpcomingEvents from "../components/UpcomingEvents";
import Timeline from "../components/Timeline";
import EventsCTA from "../components/EventsCTA";

function Events() {
  return (
    <>
      <EventsHero />

      <FeaturedEvent />

      <UpcomingEvents />

      <Timeline />

      <EventsCTA />
    </>
  );
}

export default Events;