import "../pages/About.css";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

const team = [
  {
    name: "Alex Carter",
    role: "Chief Executive Officer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600",
  },
  {
    name: "Sarah Johnson",
    role: "AI Engineer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600",
  },
  {
    name: "David Miller",
    role: "Full Stack Developer",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600",
  },
  {
    name: "Emily Brown",
    role: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600",
  },
  {
    name: "Michael Wilson",
    role: "UI / UX Designer",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600",
  },
  {
    name: "Sophia Lee",
    role: "Cloud Architect",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600",
  },
];

function AboutTeam() {
  return (
    <section className="about-team">
      <h2>Meet Our Leadership Team</h2>

      <p className="team-subtitle">
        Passionate professionals driving innovation at AI Solutions through
        Artificial Intelligence, Cloud Computing and Modern Software Development.
      </p>

      <div className="team-grid">
        {team.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="team-image">
              <img src={member.image} alt={member.name} />
            </div>

            <div className="team-content">
              <h3>{member.name}</h3>

              <span>{member.role}</span>

              <p>
                Dedicated to delivering innovative AI-powered solutions that
                help businesses transform digitally.
              </p>

              <div className="team-social">
                <a href="#">
                  <FaLinkedin />
                </a>

                <a href="#">
                  <FaGithub />
                </a>

                <a href="#">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutTeam;