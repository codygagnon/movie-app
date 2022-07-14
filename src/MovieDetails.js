import { useHistory } from "react-router-dom";

const MovieDetails = () => {
    const history = useHistory();
    
    const handleClick = () => {
        history.push("/");
    }
    
    return (
        <div>
            <p>Movie details will appear here in the near future!</p>
            <button onClick={handleClick}>Back</button>
        </div>
    );
}
 
export default MovieDetails;