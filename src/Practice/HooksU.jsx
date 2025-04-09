import React, { useState } from "react";

function HooksU() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    console.log("Before setCount:", count);
    setCount(count + 1);
    console.log("After setCount:", count);
    setCount(count + 1);
    console.log("After setCount1:", count);
  };

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default HooksU;
