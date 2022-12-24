import React from "react";

export const Counter = (props: { value: number }) => {
  const [count, setCount] = React.useState(props.value);

  return (
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
  );
};
