import React from "react";

export default function Die({ value, isHeld }) {
  const greenBtn = { backgroundColor: isHeld ? "#59e391" : "#fff" };
  return (
    <div className="die" style={greenBtn}>
      {value}
    </div>
  );
}
