import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Routes, Route } from "react-router-dom";

// styles for this kit
import "./assets/css/bootstrap.min.css";
import "./assets/scss/now-ui-kit.scss?v=1.5.0";
import "./assets/demo/demo.css?v=1.5.0";
import "./assets/demo/nucleo-icons-page-styles.css"; 

// ./assets/demo/nucleo-icons-page-styles.css?v=1.5.0

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Index from "./routes";


const App = () =>{
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Index/>} />
      </Route>
    </Routes>
  );
}

export default App;
