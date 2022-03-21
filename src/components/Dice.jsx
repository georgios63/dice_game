import { useState } from "react";

const Dice = () => {
  const [result, setResult] = useState(0);

  const rollDice = () => {
    const res = Math.round(Math.random() * 5) + 1;
    setResult(res);
  };

  return (
    <div>
      <div>
        <button onClick={rollDice}>Roll</button>
        <p>{result}</p>
      </div>
    </div>
  );
};

export default Dice;
