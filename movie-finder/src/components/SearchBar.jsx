const SearchBar = ({ query, setQuery, searchMovies }) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button onClick={searchMovies}>Search</button>
    </div>
  );
};

export default SearchBar;
