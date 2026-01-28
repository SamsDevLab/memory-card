import "../stylesheets/scoreboard.css";

function Scoreboard({ score, bestScore }) {
  return (
    <section className="scoreboard">
      <h2>Score: {score}</h2>
      <h2>High Score: {bestScore} </h2>
    </section>
  );
}

export default Scoreboard;
