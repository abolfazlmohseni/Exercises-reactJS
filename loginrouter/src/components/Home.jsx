import { useAuth } from "../context/auth-context";
import Logut from "./logut";
const Home = () => {
    const {isAuthenticated} = useAuth()

    return (
        <div>
            <h1>home page</h1>
            {isAuthenticated ?<Logut/> : null}
        </div>
    );
}

export default Home;
