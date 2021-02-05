import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import axios from '../../axios'
import './Row.css'

function Row({category,fetchUrl,isLargeRow = false}) {

    const[movies,setMovies] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request
        }
        fetchData()
    },[fetchUrl])

    return (
        <div className="row">
            <h1>{category}</h1>

            <div className="row__moviesRow">
            {
                movies.map((movie)=>(
                    (isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path) ? <Movie movie={movie} isLargeRow={isLargeRow}/> : null))
            }
            </div>

            
        </div>
    )
}

export default Row
