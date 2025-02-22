import { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../../../axios";
import { API_KEY,imageUrl } from "../../../Constants/Constant";


function Banner() {
  const [movie, setMovie] = useState();

  useEffect(() => {
    console.log(API_KEY)
    axios
      .get(`trending/all/week?api_key=${API_KEY+""}&language=en-US`)
      .then((response) => {
        console.log(response.data.results[0])
        setMovie(response.data.results[0]);
      }).catch((error) => {
        console.error('There was an error!', error);
      });
      
  }, []);

  return (
    
    <div
     style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:""})`}}
     className="banner">
      <div className="content">
        <h1 className="title">{movie?.title}</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">MyList</button>
        </div>
        <h1 className="description">
          {movie?.overview}
        </h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
