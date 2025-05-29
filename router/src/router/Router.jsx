import { useReducer, useEffect } from "react";
import { register, unregister } from "./history";

const createId = (function () {
  let id = 0;
  return () => {
    id += 1;
    return id;
  };
})();

const Router = ({ path, children }) => {
  const pathname = window.location.pathname;

  const [ignore, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    const id = createId();
    register(id, forceUpdate);
    return () => {
      unregister(id);
    };
  }, []);

  if (pathname !== path) {
    return null;
  }
  return children;
};

export default Router;
