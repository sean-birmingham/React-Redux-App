import React from 'react';
import { connect } from 'react-redux'

import Movie from "./Movie";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-flow: row wrap;
`

const MovieList = props => {
    return (
        <Container>
            {props.error ? (
                <div className="error">{props.error}</div>
            ) : (
                    props.movies.map(movie => <Movie key={movie.id} movie={movie} />)
                )}
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        movies: state.movies,
        error: state.error
    }
}

export default connect(mapStateToProps, {})(MovieList);