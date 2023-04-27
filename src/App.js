import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/index";
// import Mint from './pages/mint';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} exact />
                {/* <Route path="/mint" element={<Mint />} exact /> */}
            </Routes>
        </Router>
    );
};

export default App;
