import "./App.css";
import { useEffect, useState } from "react";
import Card from "./components/Card";

// API Key OMDB API = c26f8893

const URL = "http://www.omdbapi.com/?apikey=c26f8893";

const App = () => {
  // Movie State
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  // Funtion to call as soon as component loads (useEffect Hook)
  const fetchData = async (title) => {
    const response = await fetch(`${URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
    console.log(data.Search);
  };

  // useEffect Hook

  useEffect(() => {
    fetchData("batman");
  }, []);


  return (
    <div>
      <h1 className="text-3xl">Search Movies and TV Shows</h1>
      <div className="flex flex-row justify-center mt-14">
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
          placeholder="Search Movies and TV shows..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {/* Search Icons */}
        <button
          onClick={() => fetchData(search)} Changed Due to Pagination
          className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </button>
      </div>

      <div className="flex flex-row justify-center">
        {movies?.length > 0 ? (
          <div className="grid grid-cols-3 gap-8">
            {" "}
            {movies.map((movie) => (
              <Card movie={movie} />
            ))}
          </div>
        ) : (
          <div>
            <h2>No movies found</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
