function Character({ characterProfile, onClick }) {
  return (
    <div className="card" onClick={() => onClick()}>
      <img src="" alt="" />
      <h2 className="character-header">{characterProfile.name}</h2>
      <p>{characterProfile.bio}</p>
    </div>
  );
}

export default Character;
