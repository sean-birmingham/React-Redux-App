import React from "react";

const Movie = props => {
    return (
        <div>
            <h2>{props.movie.title}</h2>
            <p>{props.movie.description}</p>
            <p>Release Year: {props.movie.release_date}</p>
        </div>
    )
}

export default Movie;