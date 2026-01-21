import "../stylesheets/gameboard.css";
import Character from "./Character.jsx";

function Gameboard({ charactersArr }) {
  return (
    <section className="gameboard">
      {charactersArr.map((character) => (
        <Character key={character.id} characterProfile={character} />
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
