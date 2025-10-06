import React from "react";
import Home from "./components/Home";
import List from "./components/List";
import { Link, Route, Routes } from "react-router-dom"
import Notfound from "./components/Notfound";

const App = () => {
  return (
    <div>
      <h1>React Router</h1>
      <Link to="./home">Home</Link><br/>
      <Link to="./list">List</Link><br/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="*" element={<Notfound/>}/>
        
      </Routes>
      {/* <Home /> */}
      {/* <List /> */}
      {/* <Notfound/> */}
    </div>
  );
};

export default App;
