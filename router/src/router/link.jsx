import { historyPushState } from "./history";

const Link = ({ to, children }) => {
  function handleClick(e) {
    e.preventDefault();

    historyPushState(to);
  }
  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
