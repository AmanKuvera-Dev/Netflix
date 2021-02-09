import React, { useEffect, useState, useRef } from 'react'
import Movie from './Movie'
import axios from '../../../axios'
import './Row.css'

function Row({category,fetchUrl,isLargeRow = false, refName}) {

    const[movies,setMovies] = useState([]);
    const leftButton = useRef()

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request
        }
        fetchData()
    },[fetchUrl])

    const scrollLeft = () =>{
        refName.current.scrollLeft +=400
        leftButton.current.style.opacity="1"
    }

    const scrollRight = () =>{
        refName.current.scrollLeft -=400
    }

    return (
        <div className="row">
            <h1>{category}</h1>
            
            <div ref={refName} className="row__moviesRow">

                <button onClick={()=>scrollRight()} ref={leftButton} className={`row__scrollButton button__left ${isLargeRow && "row__scrollButtonLarge"}`}>&#x2039;</button>
                
                {
                    movies.map((movie)=>(
                        (isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path) ? <Movie movie={movie} isLargeRow={isLargeRow}/> : null))
                }
                
                <button onClick={()=>scrollLeft()} className={`row__scrollButton button__right ${isLargeRow && "row__scrollButtonLarge"}`}>&#x203A;</button>
            
            </div>

            
        </div>
    )
}

export default Row
