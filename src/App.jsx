import { useEffect, useState } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import Die from "./Die";

function App() {
  const [allDice, setAllDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);

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
    setAllDice((prevDice) => {
      return prevDice.map((die) => {
        return id === die.id ? { ...die, isHeld: !die.isHeld } : die;
      });
    });
  }

  const diceElement = allDice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ));

  function rollDice() {
    setAllDice((prevDice) => {
      return prevDice.map((die) => {
        return die.isHeld
          ? die
          : {
              value: Math.ceil(Math.random() * 6),
              isHeld: false,
              id: nanoid(),
            };
      });
    });
  }

  useEffect(() => {
    // Checks if all dice are held
    const allHeld = allDice.every((die) => die.isHeld);

    // Checks if all values are the same
    const firstValue = allDice[0].value;
    const allSameValue = allDice.every((die) => die.value === firstValue);

    if (allHeld && allSameValue) {
      setTenzies(true);
      console.log("You Win!");
    }
  }, [allDice]);
  // console.log(allDice[0].value);

  return (
    <main>
      <header>Tenzies</header>
      <aside>
        Roll until all dice are the same.
        <p>Click each die to freeze it at its current value between rolls.</p>
      </aside>
      <div className="container">{diceElement}</div>
      <button onClick={rollDice}>Roll</button>
    </main>
  );
}

export default App;
