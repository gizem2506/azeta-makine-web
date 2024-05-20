import React, {  Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const HomeOne = lazy(() => import("./home/HomeOne"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./service/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const NoMAtch = lazy(() => import("./pages/404"));

const App = () => {
  return (
    <Router>
        <Suspense fallback={<div />}>
            <Routes>
                <Route path="/" element={<HomeOne />} />
                <Route path="/home-one" element={<HomeOne />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact-us" element={<Contact />} />
                <Route path="*" element={<NoMAtch />} />
            </Routes>
        </Suspense>
      </Router>
  )
}

export default App