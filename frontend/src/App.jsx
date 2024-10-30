import "./App.css";
import MotivationalQuotes from "./components/MotivationalQuotes";
import ProgrammingQuotes from "./components/ProgrammingQuotes";

function App() {
  return (
    <div className="App">
      <h1>Who needs some quotes?</h1>
      <MotivationalQuotes />
      <ProgrammingQuotes />
    </div>
  );
}

export default App;
