import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// location.state contains movie title
const URL = "https://www.omdbapi.com/?apikey=c26f8893";

const Details = () => {
  const location = useLocation();
  const [data, setData] = useState([]);

  // Funtion to call as soon as component loads (useEffect Hook)
  const fetchDetails = async (title) => {
    const response = await fetch(`${URL}&t=${title}&plot=full`);
    const data = await response.json();

    //setData
    setData(data);
    console.log(data.Plot);
  };

  // useEffect Hook
  useEffect(() => {
    fetchDetails(location.state);
  }, []);
    
  const navigate = useNavigate();
  const navigateToApp = () => {
    navigate("/");
  };

  return (
    <div class="max-w-full bg-white border border-gray-200 rounded-lg shadow-md">
      <div className="flex flex-col justify-center">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{data.Title}</h5>
        <img className=" h-[700px] rounded-t-lg" src={data.Poster !== 'N/A' ? data.Poster : "https://via.placeholder.com/700"} alt="poster" />
      </div>
      <div className="flex flex-row justify-start space-x-5">
        <h5>
          Genre <p>{data.Genre}</p>
        </h5>
        <h5>
          Released <p>{data.Released}</p>
        </h5>
        <h5>
          Rated <p>{data.Rated}</p>
        </h5>
        <h5>
          IMBD Rating <p>{data.imdbRating}</p>
        </h5>
        <h5>
          Director <p>{data.Director}</p>
        </h5>
        <h5>
          Writer <p>{data.Writer}</p>
        </h5>
        <h5>
          Actors <p>{data.Actors}</p>
        </h5>
      </div>
      <div className="p-5">
        <h1 className="font-bold text-lg">Plot</h1>
        <p className="mb-3 font-normal text-gray-700">{data.Plot}</p>
          </div>
          <button onClick={() => {
        navigateToApp();
      }} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none ">Back</button>
    </div>
  );
};

export default Details;
