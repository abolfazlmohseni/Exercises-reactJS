import { useAuth } from "../context/auth-context";

const Logut = () => {
  const { logOut } = useAuth();
  return (
    <div>
      <button
        onClick={() => {
          logOut();
        }}
      >
        logut
      </button>
    </div>
  );
};

export default Logut;
