import * as React from "react";

interface State {
  count: number;
  init?: number;
}

type Action = { type: "reset" } | { type: "increment" } | { type: "decrement" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1,
        init: state.init ? state.init : 0
      };
    case "decrement":
      return { count: state.count - 1,
        init: state.init ? state.init : 0
     };
    case "reset":
      return { count: state.init ? state.init : 0,
        init: state.init ? state.init: 0
     };
    default:
      throw new Error();
  }
}

interface CounterProps {
  initialCount: number;
  init?: number;
}

export function ReducerCounter({ initialCount }: CounterProps) {
  const [state, dispatch] = React.useReducer(reducer, {
    count: initialCount,
    init: initialCount
  });

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
}

// export default Counter;
