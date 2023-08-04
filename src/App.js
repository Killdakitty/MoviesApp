import {useState, useEffect} from "react";
import logo from "./logo.svg";
import "./App.css";
// WE IMPORT OUR COMPONENTS
import MovieDisplay from "./components/MovieDisney";
import Form from "./components/Form";

// console(process.env.REACT_APP_MOVIE_API_KEY);

export default function App() {
  const apiKey="ac1eaee6Y";

  //state to hold movie data
  const [movie, setMovie]= useState (null);
  //Function to getMovies
  const getMovie = async (searchTerm) => {
    // make fetch request and store response
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}&t=${searchTerm}`
      );
      // Parse JSON response into a javascript object
      const data = await response.json();
      //set the Movie state to the movie
      setMovie(data);
    } catch(e){
      console.error(e)
    }
  };

    //This will run on the first render but not on subsquent renders
    useEffect(() => {
      getMovie("Clueless");
    }, []);

    
  //USE OUR COMPONENTS IN APPs RETURNED JSX
  // We pass
  return (

    
    <div className="App">
      
      <Form moviesearch={getMovie}/>
      <MovieDisplay movie={movie} />
      
    </div>
  );
}

