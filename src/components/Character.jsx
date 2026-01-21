function Character({ characterProfile }) {
  return (
    <div className="card">
      <img src="" alt="" />
      <h2 className="character-header">{characterProfile.name}</h2>
      <p>{characterProfile.bio}</p>
    </div>
  );
}

export default Character;
