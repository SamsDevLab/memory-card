import "./App.css";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import movieCharactersObjs from "./data";
import Scoreboard from "./components/Scoreboard";
import Gameboard from "./components/Gameboard";

function App() {
  const [movieCharacters, setMovieCharacters] = useState(movieCharactersObjs);
  const [score, setCurrentScore] = useState(0);
  const scoreKeeper = useRef(0);

  // Commented out when maxed out on API requests:
  // useEffect(() => {
  //   const apiKey = "NIXqVHbCyD2vlaPwIj5ivAPp5IbUJHxl";
  //   const newCharacterArr = movieCharactersObjs.map(async (character) => {
  //     try {
  //       const response = await fetch(
  //         `https://api.giphy.com/v1/gifs/${character.id}?api_key=${apiKey}`,
  //       ).then((result) => result.json());
  //       const newImage = response.data.images.original_still.url;
  //       return { ...character, image: newImage };
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   });
  //   Promise.all(newCharacterArr).then((results) => setMovieCharacters(results));
  // }, []);

  const updateScore = () => {
    scoreKeeper.current = scoreKeeper.current + 1;
    setCurrentScore(scoreKeeper.current);
  };

  const gameOver = () => {
    console.log("You lose, sucka!");
  };

  const updateTrueValues = (characterProfile) => {
    const updatedArr = movieCharacters.map((character) => {
      if (character.id === characterProfile.id) {
        return { ...character, clicked: true };
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

  function handleCardClick(characterProfile) {
    if (characterProfile.clicked === true) {
      gameOver();
    } else {
      // Real:
      // const updatedArr = updateTrueValues(characterProfile);
      // const shuffledMovieCharacters = shuffleCards(updatedArr);

      // Test:
      const updatedArr = updateTrueValues(characterProfile);
      console.log(updatedArr);
      const shuffledMovieCharacters = shuffleCards(updatedArr);
      updateScore();
      setMovieCharacters(shuffledMovieCharacters);
    }
  }

  return (
    <main className="main-container">
      <h1>Jim Carrey Memory Game </h1>
      <Scoreboard score={score} />
      <Gameboard movieCharacters={movieCharacters} onClick={handleCardClick} />
    </main>
  );
}

export default App;
