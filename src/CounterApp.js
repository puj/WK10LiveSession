import React, { useState } from "react";
import CounterInput from "./CounterInput";
import CounterSummary from "./CounterSummary";

const CounterApp = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleAddToCount = (numToAdd) => {
    setClickCount(clickCount + numToAdd);
  };

  console.log(`New total:  ${clickCount}`);

  return (
    <section className="counter-app">
      <h1>Counter App</h1>
      {clickCount > 20 ? (
        <CounterSummary clickCount={clickCount}></CounterSummary>
      ) : (
        <CounterInput
          clickCount={clickCount}
          handleAddToCount={handleAddToCount}
        />
      )}
    </section>
  );
};

export default CounterApp;
