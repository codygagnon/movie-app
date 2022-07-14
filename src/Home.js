import { useEffect, useState } from "react";
import MovieList from "./MovieList";

const Home = () => {
    const url = "http://www.omdbapi.com/?s=indiana jones&apikey=18cc820a";
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw Error("No results found for that query.");
                }
                return response.json();
            })
            .then(movies => {
                setMovies(movies.Search);
            })
            .catch(error => {
                setError(error.message);
            })
    }, []);
    
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {movies && <MovieList movies={movies} />}
        </div>
    );
}
 
export default Home;