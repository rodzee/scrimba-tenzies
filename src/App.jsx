import { useState } from "react";
import "./App.css";
import Die from "./Die";

function App() {
  const [allDice, setAllDice] = useState(() => {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6));
    }
    return newDice;
  });

  const diceElement = allDice.map((dice) => <Die value={dice} />);

  return (
    <main>
      <div className="container">{diceElement}</div>
    </main>
  );
}

export default App;
