import team from "./teamData";
import TeamMemberCard from "./TeamMemberCard";
import "./team.css";

export default function TeamSection() {
  return (
    <section className="team-section">
      <h2>Our Team</h2>

      <div className="team-container">
        {team.map((member) => (
          <TeamMemberCard key={member.name} {...member} />
        ))}
      </div>
    </section>
  );
}
