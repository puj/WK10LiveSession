import React from "react";

const CounterInput = ({ clickCount, handleAddToCount }) => {
  if (clickCount > 20) {
    return <p>Summary: ${clickCount}</p>;
  }

  return (
    <section className="counter-input">
      <button onClick={(e) => handleAddToCount(1)}>+1</button>
      <button onClick={(e) => handleAddToCount(5)}>+5</button>
      <p className="counter-total">Total: {clickCount}</p>
    </section>
  );
};

export default CounterInput;
