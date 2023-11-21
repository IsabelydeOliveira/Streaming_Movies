import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { IoMdHome } from "react-icons/io";
import { FiPlus } from "react-icons/fi";

import "./MoviesGrid.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
    console.log(topRatedUrl);
    getTopRatedMovies(topRatedUrl);
  }, []);

  console.log(topMovies);

  return (
    <>
    <div className="container">
    <div className="sidbar">


      <ul className="icons">
        <li className="item-menu">
          <a href="#">
            <span className="icon"><IoMdHome/></span>
            <span className="txt-link"></span>
          </a>
        </li>
        <li className="item-menu">
          <a href="#">
            <span className="icon"><FiPlus/></span>
            <span className="txt-link"></span>
          </a>
        </li>
      
      </ul>
      </div>
    
    
      <h2 className="title">Filmes mais populares:</h2>
      <div className="movies-container">
        
        {topMovies.length > 0 && 
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
      </div>
    
    </>
  );
};

export default Home;
