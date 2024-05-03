import { useState } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import Die from "./Die";

function App() {
  const [allDice, setAllDice] = useState(allNewDice());

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      });
    }
    return newDice;
  }

  function holdDice(id) {
    return console.log(id);
  }

  const diceElement = allDice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ));

  function handleRoll() {
    setAllDice(allNewDice());
  }

  return (
    <main>
      <header>Tenzies</header>
      <aside>
        Roll until all dice are the same.
        <p>Click each die to freeze it at its current value between rolls.</p>
      </aside>
      <div className="container">{diceElement}</div>
      <button onClick={handleRoll}>Roll</button>
    </main>
  );
}

export default App;
