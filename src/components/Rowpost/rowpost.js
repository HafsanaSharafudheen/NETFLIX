import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './rowpost.css';
import { ArrowBack, ArrowForward } from 'react-icons';
import YouTube from 'react-youtube';
import { imageUrl, API_KEY, baseUrl } from '../../constants/constants'; 

const RowPost = (props) => {
  const [movies, setMovies] = useState([]);
  const [UrlKey, setUrlKey] = useState("");
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollLeft = () => {
    setScrollPosition(prevPosition => prevPosition - 100); 
  };

  const scrollRight = () => {
    setScrollPosition(prevPosition => prevPosition + 100); 
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

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

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
      <div className="scroll-container" style={{ overflowX: 'auto', scrollBehavior: 'smooth', scrollLeft: scrollPosition }}>

        <button onClick={scrollLeft}><ArrowBack /></button>
          {movies.map((obj) => (
            <img onClick={() => handleMovieTrailor(obj.id)} className={props.isSmall ? 'small-poster' : 'poster'} alt='post' src={`${imageUrl+obj.backdrop_path}`} />
          ))}
        </div>
        <button onClick={scrollRight}><ArrowForward /></button>
      </div>
      {UrlKey && <YouTube videoId={UrlKey.key} opts={opts} />}
    </div>
  );
};

export default RowPost;
