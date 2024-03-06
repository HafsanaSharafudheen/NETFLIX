import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './rowpost.css';
import YouTube from 'react-youtube';
import { imageUrl, API_KEY, baseUrl } from '../../constants/constants'; 

const RowPost = (props) => {
  const [movies, setMovies] = useState([]);
  const [UrlKey, setUrlKey] = useState("");

  // Define opts here
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  useEffect(() => {
    axios.get(props.url)
      .then((response) => {
        console.log(response.data);
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [props]);

  const handleMovieTrailor = (id) => {
    axios.get(`${baseUrl}/movie/${id}/videos?api_key=${API_KEY}`).then((response) => {
      if (response.data.results.length !== 0) {
        setUrlKey(response.data.results[0])
      } else {
        console.log("Array is Empty")
      }
    })
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <img key={obj.id} onClick={() => handleMovieTrailor(obj.id)} className={props.isSmall ? 'small-poster poster' : 'poster'} alt='post' src={`${imageUrl+obj.backdrop_path}`} />
        ))}
      </div>
      {UrlKey && <YouTube videoId={UrlKey.key} opts={opts} />}
    </div>
  );
};

export default RowPost;
