import "./App.css";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import soundEffect from "./assets/alrighty-then.mp3";
import movieCharactersObjs from "./data";
import Scoreboard from "./components/Scoreboard";
import Gameboard from "./components/Gameboard";
import GameOver from "./components/GameOver";

function App() {
  const [movieCharacters, setMovieCharacters] = useState(movieCharactersObjs);
  const [score, setCurrentScore] = useState(0);
  const scoreKeeper = useRef(0);
  const [gameOverStatus, setGameOverStatus] = useState(false);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    const apiKey = "NIXqVHbCyD2vlaPwIj5ivAPp5IbUJHxl";

    const idStr = movieCharactersObjs
      .map((character) => {
        return character.id;
      })
      .join(",");

    const fetchedData = (async () => {
      try {
        const response = await fetch(
          `https://api.giphy.com/v1/gifs?api_key=${apiKey}&ids=${idStr}`,
        );
        return response.json();
      } catch (error) {
        console.error(error);
      }
    })();

    const completeArr = fetchedData.then((result) => {
      if (typeof result === "string") {
        const newArr = movieCharactersObjs.map(
          (character) => (character.image = result),
        );
        setMovieCharacters(newArr);
      } else {
        const fetchedGifs = result.data;
        const newArr = movieCharactersObjs.map((character) => {
          fetchedGifs.forEach((gif) => {
            if (character.id === gif.id) {
              character.image = gif.images.original_still.url;
            }
          });
          return character;
        });
        return newArr;
      }
    });
    completeArr.then((array) => setMovieCharacters(array));
  }, []);

  const updateScore = () => {
    scoreKeeper.current = scoreKeeper.current + 1;
    setCurrentScore(scoreKeeper.current);
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

  const callSoundEffect = () => {
    new Audio(soundEffect).play();
  };

  function handleCardClick(characterProfile) {
    if (characterProfile.clicked === true) {
      callSoundEffect();
      setGameOverStatus(true);
    } else {
      const updatedArr = updateTrueValues(characterProfile);
      const shuffledMovieCharacters = shuffleCards(updatedArr);
      updateScore();

      setMovieCharacters(shuffledMovieCharacters);
    }
  }

  function handleGameRestart() {
    setCurrentScore(0);
    scoreKeeper.current = 0;
    setMovieCharacters(movieCharactersObjs);
    setGameOverStatus(false);
    setBestScore(score);
  }

  return (
    <main className="main-container">
      <h1>Jim Carrey Memory Game </h1>
      <Scoreboard score={score} bestScore={bestScore} />
      <Gameboard movieCharacters={movieCharacters} onClick={handleCardClick} />
      <GameOver status={gameOverStatus} onClick={handleGameRestart} />
    </main>
  );
}

export default App;
