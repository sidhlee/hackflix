import axios from 'axios';
import { useEffect, useState } from 'react';

const MovieInfo = ({ match }) => {
  const { movieId } = match.params;
  const [movieInfo, setMovieInfo] = useState({});

  useEffect(() => {
    axios({
      url: `https://api.themoviedb.org/3/movie/${movieId}`,
      params: {
        api_key: process.env.REACT_APP_TMDB_KEY,
      },
    }).then(({ data }) => {
      console.log(data);
      setMovieInfo(data);
    });
  }, [movieId]);

  return (
    <div className="poster">
      <div className="description">
        <h2>{movieInfo.title}</h2>
        <p>{movieInfo.overview}</p>
      </div>
      <img
        src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
        alt={`The poster for ${movieInfo.title}`}
      />
    </div>
  );
};

export default MovieInfo;
