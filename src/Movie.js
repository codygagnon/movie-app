import { Link } from "react-router-dom";

const Movie = ({movie}) => {
    return (
        <Link to={`/movies/${movie.imdbID}`}>
            <img src={movie.Poster} alt="movie poster"/>
            <h3>{`${movie.Title} (${movie.Year})`}</h3>
        </Link>
    );
}
 
export default Movie;