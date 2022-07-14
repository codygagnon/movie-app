import { useEffect, useState } from "react";
import MovieList from "./MovieList";
import Search from "./Search";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [searchValue, setSearchValue] = useState("");
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=18cc820a`

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
    }, [url, searchValue]);

    return (
        <div className="home">
            <Search setSearchValue={setSearchValue} />
            {error && <div>{error}</div>}
            {movies && <MovieList movies={movies} />}
        </div>
    );
}
 
export default Home;