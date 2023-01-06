import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  return (
    <>
      <Routes location>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route index path="about" element={<About />} />
          <Route index path="contact" element={<Contact />} />
          <Route index path="portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
