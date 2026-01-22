import "../stylesheets/scoreboard.css";

function Scoreboard({ scoreCounter }) {
  return (
    <section className="scoreboard">
      <h2>Score: {scoreCounter}</h2>
      <h2>Best Score: </h2>
    </section>
  );
}

export default Scoreboard;
