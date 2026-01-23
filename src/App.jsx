import "./App.css";

import { useState } from "react";
import movieCharactersObjs from "./data";
import Scoreboard from "./components/Scoreboard";
import Gameboard from "./components/Gameboard";

function App() {
  const [movieCharacters, setMovieCharacters] = useState(movieCharactersObjs);

  console.log(movieCharacters);

  const updateTrueValues = (characterProfile) => {
    const updatedArr = movieCharacters.map((character) => {
      if (character.id === characterProfile.id) {
        return { ...characterProfile, clicked: true };
      }

      return { ...character };
    });

    return updatedArr;
  };

  const shuffleCards = (arr) => {
    let currentIndex = arr.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [arr[currentIndex], arr[randomIndex]] = [
        arr[randomIndex],
        arr[currentIndex],
      ];
    }

    return arr;
  };

  const handleCardClick = (characterProfile) => {
    const updatedArr = updateTrueValues(characterProfile);
    const shuffledArr = shuffleCards(updatedArr);

    setMovieCharacters(shuffledArr);

    /*
      Needs to:
        • Set characterProfile.clicked to true through helper, return new array
        • Shuffle the array
        • Re-call the fetch API
        • Call setMovieCharacters with new array to update status
    */
  };

  return (
    <main className="main-container">
      <h1>Jim Carrey Memory Game </h1>
      <Scoreboard movieCharacters={movieCharacters} />
      <Gameboard movieCharacters={movieCharacters} onClick={handleCardClick} />
    </main>
  );
}

export default App;

/* 
App Design Ideas:

Components Needed

Scoreboard:


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
