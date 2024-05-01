import "./App.css";
import Die from "./Die";

function App() {
  const allNewDice = () => {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6));
    }
    return newDice;
  };
  return (
    <main>
      <div className="container">
        <Die value={allNewDice()} />
      </div>
    </main>
  );
}

export default App;
