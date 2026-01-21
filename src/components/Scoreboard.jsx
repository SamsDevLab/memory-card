import "../stylesheets/scoreboard.css";

function Scoreboard({ counter }) {
  return (
    <section className="scoreboard">
      <h2>Score: {counter.current}</h2>
      <h2>Best Score: </h2>
    </section>
  );
}

export default Scoreboard;
