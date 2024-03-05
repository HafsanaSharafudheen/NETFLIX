import React, { useEffect, useState } from "react";
import "./banner.css";
import axios from "../../axios";
import { API_KEY, imageUrl, baseUrl } from "../../constants/constants";

function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    // axios.get(`${baseUrl}/movie/popular?api_key=${API_KEY}&language=en-US&page=2`)
    axios
      .get(`${baseUrl}/movie/popular?api_key=${API_KEY}&language=en-US&page=2`)
      .then((response) => {
          let movies = Math.floor(Math.random() * response?.data?.results.length) || 0
        setMovie(response.data.results[movies]);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path : ""})`
      }}
      className="banner"
    >
      <div className="content">
        <h1 className="title">{movie ? movie?.title : ""}</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="description">{movie ? movie?.overview : ""}</h1>
      </div>
      <div className="fade_botton"></div>
    </div>
  );
}

export default Banner;
