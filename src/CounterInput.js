import React from 'react';

const CounterInput = ({ handleAddClicks, clickCount }) => {
  return (
    <section className="counter-input">
      <button onClick={() => handleAddClicks(1)}>+1</button>
      <button onClick={() => handleAddClicks(5)}>+5</button>
      <button onClick={() => handleAddClicks(10)}>+10</button>
      <button onClick={() => handleAddClicks(20)}>+20</button>
      <p className="counter-total">Total Clicks: {clickCount}</p>
    </section>
  );
};

export default CounterInput;
