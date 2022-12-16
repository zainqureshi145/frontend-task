import { useNavigate } from "react-router-dom";

const Card = ({ movie }) => {
  const navigate = useNavigate();

  const navigateToDetails = () => {
    navigate("/details", { state: movie.Title });
  };

  return (
    <div
      onClick={() => {
        navigateToDetails();
      }}
      className="mt-20 max-w-[250px] bg-white border border-gray-200 rounded-lg shadow-md"
    >
      <a href="#">
        <img className="rounded-t-lg" src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/600"} alt="poster" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{movie.Title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700">{movie.Year}</p>
        <div>
          <span>{movie.Type}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
