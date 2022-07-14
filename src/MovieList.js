const MovieList = ({movies}) => {
    return (
        <div className="movie-list">
            {movies.map(movie => (
                <div className="movie">
                    <img src={movie.Poster} alt="movie poster" key={movie.imdbID}/>
                    <h3>{`${movie.Title} (${movie.Year})`}</h3>
                </div>
            ))}
        </div>
    );
}
 
export default MovieList;