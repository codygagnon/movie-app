const Search = ({setSearchValue, handleSearch}) => {
    return (
        <div className="search">
            <input
            type="text"
            placeholder="Enter a movie title"
            onChange={event => {setSearchValue(event.target.value)}} 
            onKeyUp={handleSearch}
            />
        </div>
    );
}
 
export default Search;