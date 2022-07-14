import Movie from "./Movie";

const MovieList = ({movies}) => {
    return (
        <div className="movie-list">
            {movies.map(movie => (
                <div className="movie" key={movie.imdbID}>
                    <Movie movie={movie} />
                </div>
            ))}
        </div>
    );
}
 
export default MovieList;