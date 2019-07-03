import React, { useState, useEffect } from "react";

const LIMIT = 60;

const HooksComponent = () => {
  const [count, setCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(LIMIT);

  useEffect(() => {
    const timerId = setInterval(tick, 1000);
    return () => clearInterval(timerId);
  }, []);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setTimeLeft(LIMIT);
  };

  const tick = () => {
    setTimeLeft(prevTime => (prevTime === 0 ? LIMIT : prevTime - 1));
  };

  return (
    <React.Fragment>
      <div>{count}</div>
      <div>{timeLeft}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={tick}>Go!</button>
      <button onClick={reset}>Stop!</button>
    </React.Fragment>
  );
};

export default HooksComponent;
