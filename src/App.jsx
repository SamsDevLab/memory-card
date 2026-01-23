import "./App.css";

import { useState } from "react";
import movieCharacters from "./data";
import Scoreboard from "./components/Scoreboard";
import Gameboard from "./components/Gameboard";

// console.log(charactersArr);

function App() {
  // const [scoreCounter, setScoreCounter] = useState(0);
  const [movieCharactersObjs, setMovieCharactersObjs] =
    useState(movieCharacters);

  const handleCardClick = (characterProfile) => {
    console.log(characterProfile);
    // setScoreCounter(scoreCounter + 1);
  };

  return (
    <main className="main-container">
      <h1>Jim Carrey Memory Game </h1>
      {/* <Scoreboard scoreCounter={scoreCounter} /> */}
      <Scoreboard />
      <Gameboard
        movieCharacters={movieCharactersObjs}
        onClick={handleCardClick}
      />
    </main>
  );
}

export default App;

/* 
App Design Ideas:

Components Needed

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

  Needs for the onClick (when a card is actually clicked):
  • Update 'clicked' to 'true' to ensure that the card cannot be clicked again
    • If a card is 'clicked' and it's already set to true the game ends and the best score is updated
  • Update Score

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
