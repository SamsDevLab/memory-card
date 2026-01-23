import "../stylesheets/gameboard.css";
import Card from "./Card.jsx";

function Gameboard({ charactersArr, onClick }) {
  return (
    <section className="gameboard">
      {charactersArr.map((character) => (
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

/*
Needs for Gameboard:
• Card components
    • Holds card structures in Card component - organizes them via grid
    • Click Fn - randomizes cards but also updates state in App.
        • If a card has been clicked on more than once, player loses the game and it restarts
• (Maybe) GameBoard will need to implement useEffect() to re-call the API after click
*/
