import logo from "./logo.svg";
import "./App.css";
import routes from "./infrastructure/routes";

import { BrowserRouter as Router, useRoutes } from "react-router-dom";

const AppRoutes = () => useRoutes(routes);

function App() {
    return (
        <Router>
            <AppRoutes />
        </Router>
    );
}

export default App;

/*
   <div className="app">
            <div className="navbar">

            </div>

            <div className="main">

            </div>

            <div className="footer">

            </div>
        </div> */
