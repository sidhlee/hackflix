import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MovieCatalogue = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios({
      url: `https://api.themoviedb.org/3/discover/movie`,
      params: {
        api_key: process.env.REACT_APP_TMDB_KEY,
        include_video: false,
        include_adult: false,
        primary_release_year: 2000,
      },
    }).then((res) => {
      // console.log(res.data);
      const movies = res.data.results;
      setMovies(movies);
    });
  }, []);

  return (
    <ul className="catalogue">
      {movies.map((movie) => {
        return (
          <li key={movie.id} className="movie">
            <Link to={`/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={`The poster for ${movie.title}`}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieCatalogue;
