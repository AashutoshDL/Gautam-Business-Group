import React from "react";
//importing the containers from the container.jsx file
import {
  Footer,
  Features,
  Blog,
  Header,
  // Possibility,
  WhatGPT3,
} from "./container/container";
//importing the necessary components from components.js files
import { CTA, Navbar } from "./components/components"; //if we keep the name of the file as index.jsx we dont have to specify path of the file with the folder but if we keep anything other than index.js than we have to go inside the components/container and then specify the file name for it to compile
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      {/* <Brand /> */}
      <WhatGPT3 />
      <Features />
      {/* <Possibility /> */}
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
