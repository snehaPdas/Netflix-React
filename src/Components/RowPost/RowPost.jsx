import React,{useEffect,useState} from 'react'
import "./RowPost.css";
import axios from '../../axios'
import {imageUrl} from '../../Constants/Constant'

function RowPost(props) {
    const[movies,setMovies]=useState([])
    useEffect(()=>{
     axios.get(props.url).then(response=>{
        setMovies(response.data.results)
     })
     .catch((error) => {
      console.error('There was an error!', error);
    });
    },[])
  return (
    <div>
      <h2 className="row">{props.title}</h2>
      <div className="posters">
        {
            movies.map((obj)=>
                <img className={props.isSmall ?"smallPoster" :"poster"} alt="poster"src={`${imageUrl+obj.backdrop_path}` }/>

            )
        }

      </div>
    </div>
  )
}

export default RowPost
