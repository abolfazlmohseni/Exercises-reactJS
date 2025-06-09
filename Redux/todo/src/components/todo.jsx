
import { useState, useEffect } from "react";
let todoid = 0;

const Todo = ({ store }) => {
  function handelKeyDown(event) {
    if ("Enter" === event.code) {
      const { target } = event;
      store.dispatch({
        type: "ADD_TODO",
        id: todoid++,
        text: target.value,
      });
      target.value = "";
    }
  }
  const [state, forceUpdate] = useState(0);
  useEffect(() => {
    const unSubscibe = store.subscribe(() => forceUpdate((c) => c + 1));
    return () => unSubscibe();
  }, [store]);

  const todos = store.getState().map((todo) => {
    return (
      <li
        key={todo.id}
        onClick={() => {
          store.dispatch({
            type: "TOGGLE_TODO",
            id: todo.id,
          });
        }}
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </li>
    );
  });
  return (
    <div>
      <input type="text" onKeyDown={handelKeyDown} />
      <ul>{todos}</ul>
    </div>
  );
};

export default Todo;
