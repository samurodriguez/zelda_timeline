import "./App.css";
import zeldaGames from "./data/zelda.json";
import { Timeline } from "./components/Timeline";

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="goldText">Zelda Timeline</h1>
      </header>
      <main>
        <Timeline games={zeldaGames} />
      </main>
      <footer>Hack a Boss 2022@</footer>
    </div>
  );
}

export default App;
