import React from 'react'
import './Movie.css'


function Movie({isLargeRow =false , movie}) {
    const base_url = "https://image.tmdb.org/t/p/original/"

    console.log(movie)

    return (
        <div className="movie" key={movie.id}>
            <img 
                className="movie__img"
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                alt=""
            />
            <div className={`movie__details ${isLargeRow && "movie__details--hide"}`}>
                <h3>{movie.original_title ? movie.original_title : movie.name}</h3>
                <p>Rating : {movie.vote_average} /10</p>
            </div>

        </div>
    )
}

export default Movie
