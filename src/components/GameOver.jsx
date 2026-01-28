function GameOver({ status, onClick }) {
  if (status === true) {
    return (
      <dialog className="modal show">
        <h3>Game Over</h3>
        <button onClick={onClick}>Restart</button>
      </dialog>
    );
  }
}

export default GameOver;
