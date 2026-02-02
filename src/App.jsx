import "./stylesheets/app.css";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import soundEffect from "./assets/alrighty-then.mp3";
import movieCharactersObjs from "./data";
import Scoreboard from "./components/Scoreboard";
import Gameboard from "./components/Gameboard";
import GameOver from "./components/GameOver";

function App() {
  const [movieCharacters, setMovieCharacters] = useState([]);
  const [score, setCurrentScore] = useState(0);
  const [gameOverStatus, setGameOverStatus] = useState(false);
  const [bestScore, setBestScore] = useState(0);
  const scoreKeeper = useRef(0);
  const objArrWithImages = useRef([]);

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
      const fetchedGifs = result.data;
      const newArr = movieCharactersObjs.map((character) => {
        const matchedGif = fetchedGifs.find((gif) => gif.id === character.id);

        if (matchedGif !== undefined) {
          return {
            ...character,
            image: matchedGif.images.original_still.url,
          };
        } else return { ...character };
      });
      return newArr;
    });

    completeArr.then((newArr) => {
      objArrWithImages.current = newArr;
      setMovieCharacters(newArr);
    });
  }, []);

  const updateScore = () => {
    scoreKeeper.current = scoreKeeper.current + 1;
    setCurrentScore(scoreKeeper.current);
    if (scoreKeeper.current === 10) {
      setGameOverStatus(true);
      callSoundEffect();
    }
  };

  const updateTrueValues = (characterProfile) => {
    const updatedArr = movieCharacters.map((character) => {
      if (character.id === characterProfile.id) {
        return { ...character, clicked: true };
      } else return { ...character };
    });

    return updatedArr;
  };

  const shuffleCards = (arr) => {
    const shuffledArr = [...arr];
    let currentIndex = shuffledArr.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [shuffledArr[currentIndex], shuffledArr[randomIndex]] = [
        shuffledArr[randomIndex],
        shuffledArr[currentIndex],
      ];
    }

    return shuffledArr;
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
    if (score > bestScore) setBestScore(score);
    setCurrentScore(0);
    scoreKeeper.current = 0;
    setMovieCharacters(objArrWithImages.current);
    setGameOverStatus(false);
  }

  return (
    <main className="main-container">
      <div className="header-and-board">
        <div className="title-container">
          <h1>Jim Carrey Memory Game </h1>
          <h2>
            Click a card, gain a point - but don't click the same card twice!
          </h2>
        </div>
        <Scoreboard score={score} bestScore={bestScore} />
      </div>
      <Gameboard
        gameOverStatus={gameOverStatus}
        movieCharacters={movieCharacters}
        onClick={handleCardClick}
      />
      <GameOver
        score={score}
        status={gameOverStatus}
        onClick={handleGameRestart}
      />
    </main>
  );
}

export default App;
