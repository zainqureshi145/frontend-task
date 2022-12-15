const Card = ({ movie }) => {
  return (
    <div className="mt-20 max-w-[250px] bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/600'} alt="poster"/>
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movie.Title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{movie.Year}</p>
        <div>
          <span>{movie.Type}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
