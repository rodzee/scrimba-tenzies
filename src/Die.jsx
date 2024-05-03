import React from "react";

export default function Die({ value, isHeld, holdDice }) {
  const greenBtn = { backgroundColor: isHeld ? "#59e391" : "#fff" };
  return (
    <div onClick={holdDice} className="die" style={greenBtn}>
      {value}
    </div>
  );
}
