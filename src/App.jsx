import { useEffect, useState } from "react";
import "./App.css";
import Confetti from "react-confetti";
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

  const diceElement = allDice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ));

  function holdDice(id) {
    setAllDice((prevDice) => {
      return prevDice.map((die) => {
        return id === die.id ? { ...die, isHeld: !die.isHeld } : die;
      });
    });
  }

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

  const handleReset = () => {
    setAllDice(allNewDice());
    setTenzies(false);
  };

  return (
    <main>
      {tenzies && <Confetti />}
      <header>Tenzies</header>
      <aside>
        Roll until all dice are the same.
        <p>Click each die to freeze it at its current value between rolls.</p>
      </aside>
      <div className="container">{diceElement}</div>
      <button onClick={tenzies ? handleReset : rollDice}>
        {tenzies ? "New Game" : "Roll"}
      </button>
    </main>
  );
}

export default App;
