import Home from './Pages/Home'
import Login from "./Pages/Login";
import Register from "./Pages/Register";

import { useEffect, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// animation on scroll
import AOS from "aos";
import "aos/dist/aos.css";
import { Cube } from 'react-preloaders';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  });

  return (
    <>
      <Router>
        <Suspense fallback={<Cube color="rgb(68, 117, 242)" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path='*' element={<Navigate to='/'/>} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
