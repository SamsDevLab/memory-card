function GameOver({ score, status, onClick }) {
  if (status === true) {
    return (
      <dialog className="modal show">
        <h3>{score === 10 ? "You Won!" : "Game Over"}</h3>
        <button onClick={onClick}>Restart</button>
      </dialog>
    );
  } else return null;
}

export default GameOver;
