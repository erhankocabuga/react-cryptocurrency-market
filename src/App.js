import "./App.scss";
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
