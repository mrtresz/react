
import './App.css';
// import Football from './Football';
// import Car from "./Car"//
// import Garage from "./Garage"
import MyForm from './MyForm';

import { useState } from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";


function App() {
  // const cars = ["bmw", "ford", "audi"]


  const [color, setColor] = useState("Red")


  return (
    <div className="App">
      {/* <Garage cars={cars} />
      <Football /> */}

      <h1>My favourite color is {color}</h1>
      <button type="button" onClick={() => setColor("Blue")}>Blue</button>

      <MyForm />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />

        </Routes>
      </BrowserRouter>

    </div >
  );

}

export default App;
