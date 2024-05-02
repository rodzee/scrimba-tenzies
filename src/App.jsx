import { useState } from "react";
import "./App.css";
import Die from "./Die";

function App() {
  const [allDice, setAllDice] = useState(allNewDice());

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6));
    }
    return newDice;
  }

  const diceElement = allDice.map((dice) => <Die value={dice} />);

  function handleRoll() {
    setAllDice(allNewDice());
  }

  return (
    <main>
      <header>Tenzies</header>
      <aside>
        Roll until all dice are the same.{" "}
        <p>Click each die to freeze it at its current value between rolls.</p>
      </aside>
      <div className="container">{diceElement}</div>
      <button onClick={handleRoll}>Roll</button>
    </main>
  );
}

export default App;
