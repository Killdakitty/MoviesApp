import {useState, useEffect} from "react";
import logo from "./logo.svg";
import "./App.css";
// WE IMPORT OUR COMPONENTS
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";


function App() {
  return (
    <div className="App">
      
      <Form />
      <MovieDisplay />
      
    </div>
  );
}

export default App;
