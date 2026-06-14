

import AboutHero from "../components/AboutHero";
import AboutStats from "../components/AboutStats";
import AboutMission from "../components/AboutMission";
import AboutTeam from "../components/AboutTeam";
import AboutCTA from "../components/AboutCTA";

function About() {
  return (
    <div className="about-page">
      <AboutHero />
      <AboutStats />
      <AboutMission />
      <AboutTeam />
      <AboutCTA />
    </div>
  );
}

export default About;