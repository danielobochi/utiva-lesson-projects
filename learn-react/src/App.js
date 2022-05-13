import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";

import CardComponent from "./components/CardComponent";

function App() {
  return (
    <div>
      <h1>My App</h1>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <CardComponent title="1" description="Card 1" colour="skyblue" />
        <CardComponent title="2" description="Card 2" colour="yellow" />
        <CardComponent title="3" description="Card 3" colour="green" />
      </div>

      <nav>
        <Link to="/">Home</Link> | <Link to="about">About</Link>|{" "}
        <Link to="contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
