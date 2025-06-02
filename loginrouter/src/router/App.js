import { Link, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Blog from "../components/Blog";
import Panel from "../components/Panel";
import Login from "../components/Login";
import PersonalRoute from "./personalRoute";
export default function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/blog">blog</Link>
        </li>
        <li>
          <Link to="/panel">panel</Link>
        </li>
        <li>
          <Link to="/login">login</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route
          path="/panel"
          element={
            <PersonalRoute>
              <Panel />
            </PersonalRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>

    </>
  );
}
