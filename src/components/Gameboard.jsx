import "../stylesheets/gameboard.css";
import Card from "./Card.jsx";

function Gameboard({ gameOverStatus, movieCharacters, onClick }) {
  return (
    <section className={gameOverStatus ? "disabled gameboard" : "gameboard"}>
      {movieCharacters.map((character) => (
        <Card
          key={character.id}
          characterProfile={character}
          onClick={onClick}
        />
      ))}
    </section>
  );
}

export default Gameboard;
