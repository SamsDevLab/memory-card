import "./App.css";
import charactersArr from "./data";
import Scoreboard from "./components/Scoreboard";
import Gameboard from "./components/Gameboard";

// console.log(charactersArr);

function App() {
  return (
    <main className="main-container">
      <h1>Jim Carrey Memory Game </h1>
      <Scoreboard />
      <Gameboard charactersArr={charactersArr} />
    </main>
  );
}

export default App;

/* 
App Design Ideas:

Components Needed

After lunch: make a data.js file and start playing around with the objects structures and
delivering that data to the Gameboard

Scoreboard:
  • Possibly need a counter on card objects
    • When a card object is clicked, the counter increases to 1
    • If a counter goes above 1, this means the card has been clicked twice
    • If that happens, the player loses the game

  GameBoard:
  • Holds cards in component - organizes them via grid
  • Click Fn 
    • When clicking a card, cards will randomize
    • This will probably need to pass down as a prop to “Cards” component
  • Cards component
    • GameBoard will need to implement useEffect() to re-call the API after click


  Jim Carrey API characters

  ✅ 1. The Mask
  ✅ 2. The Cable Guy
  ✅ 3. Riddler
  ✅ 4. Dumb and Dumber
  ✅ 5. Me, Myself, and Irene
  ✅ 6. Ace Ventura
  ✅ 7. Liar, Liar
  ✅ 8. The Grinch
  ✅ 9. Fire Marshall Bill
  ✅ 10. The Truman Show

*/
