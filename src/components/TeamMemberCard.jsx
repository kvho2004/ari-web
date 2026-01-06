export default function TeamMemberCard({ name, role, image, bio }) {
  return (
    <div className="team-card">
      <img className="team-card-img" src={image} alt={name} />

      <div className="team-card-body">
        <h3 className="team-card-name">{name}</h3>
        <p className="team-card-role">{role}</p>
        <p className="team-card-bio">{bio}</p>
      </div>
    </div>
  );
}
