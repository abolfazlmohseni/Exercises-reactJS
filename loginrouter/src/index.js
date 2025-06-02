import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./router/App";
import { AuthProvider } from "./context/auth-context";
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
    <BrowserRouter>
        <AuthProvider>
            <App />
        </AuthProvider>
    </BrowserRouter>
);
