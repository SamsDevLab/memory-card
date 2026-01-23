function Card({ characterProfile, onClick }) {
  return (
    <div className="card" onClick={() => onClick(characterProfile)}>
      {/* <img src="" alt="" /> */}
      <h2 className="character-header">{characterProfile.name}</h2>
      <p>{characterProfile.bio}</p>
    </div>
  );
}

export default Card;
