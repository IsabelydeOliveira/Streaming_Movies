import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const imagesURL = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {

  return (
    //Retornando dados da api
    <div className="movie-card">
      <img src={imagesURL + movie.poster_path} alt={movie.title} />     
      <h2>{movie.title}</h2>
             <p>
               <FaStar />
              {movie.vote_average}
              {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
            </p>      
    </div>
  );
};

export default MovieCard;
