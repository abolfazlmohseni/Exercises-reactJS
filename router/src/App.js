import Abute from "./pages/abute/abute";
import Router from "./router/Router";
import Home from "./pages/home"
import Contact from "./pages/contact"
import Blog from "./pages/blog"

const App = () => {
    return (
        <>
            <Router path={"/"}>
                <Home />
            </Router>
            <Router path={"/abute"}>
                <Abute />
            </Router>
            <Router path={"/contact"}>
                <Contact />
            </Router>
            <Router path={"/blog"}>
                <Blog />
            </Router>

        </>


    );
}

export default App;
