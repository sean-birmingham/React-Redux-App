import React from "react";
import styled from "styled-components";

const Card = styled.div`
    background-color: #DCEDFF;
    color: #000;
    margin: 10px auto;
    padding: 10px;
    width: 30%;
`

const Movie = props => {
    return (
        <Card>
            <h2>{props.movie.title}</h2>
            <p>{props.movie.description}</p>
            <p>Release Year: {props.movie.release_date}</p>
        </Card>
    )
}

export default Movie;