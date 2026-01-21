import "./App.css";
import Scoreboard from "./components/Scoreboard";
import Gameboard from "./components/Gameboard";

function App() {
  return (
    <main className="main-container">
      <h1>Jim Carrey Card Selector </h1>
      <Scoreboard />
      <Gameboard />
    </main>
  );
}

export default App;

/* 
App Design Ideas:
Memory Card Project

Jim Carrey API characters

1. The Mask
2. The Cable Guy
3. Riddler
4. Dumb and Dumber
5. Me, Myself, and Irene
6. Ace Ventura
7. Liar, Liar
8. The Grinch
9. Fire Marshall Bill
10. Man on the Moon

Components Needed

Scoreboard
  • CurrentScore component counter
  • BestScore component - updates with best score after a loss


  GameBoard
      /*
      • Holds cards in component - organizes them via grid
      • Click Fn 
        • When clicking a card, cards will randomize
        • This will probably need to pass down as a prop to “Cards” component
      • Cards component
      • GameBoard will need to implement useEffect() to re-call the API after click
*/
