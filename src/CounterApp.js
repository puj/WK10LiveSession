import React, { useState } from 'react';
import CounterInput from './CounterInput';
import CounterSummary from './CounterSummary';

const CounterApp = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleAddClicks = (numClicks) => {
    console.log(`+${numClicks} clicked`);
    setClickCount(clickCount + numClicks);
  };

  console.log(clickCount);

  return (
    <section className="counter-app">
      <h1>Counter App</h1>
      {clickCount > 60 ? (
        <CounterSummary clickCount={clickCount} />
      ) : (
        <CounterInput
          clickCount={clickCount}
          handleAddClicks={handleAddClicks}
        />
      )}
    </section>
  );
};

export default CounterApp;
