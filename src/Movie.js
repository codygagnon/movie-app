const Movie = ({movie}) => {
    return (
        <div className="movie" key={movie.imdbID}>
            <img src={movie.Poster} alt="movie poster"/>
            <h3>{`${movie.Title} (${movie.Year})`}</h3>
        </div>
    );
}
 
export default Movie;