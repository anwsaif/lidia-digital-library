import Home from './Pages/Home'
import Login from "./Pages/Login";
import Register from "./Pages/Register";

import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// animation on scroll
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  });

  return (
    <>
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
