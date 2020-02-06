import React from 'react';
import { connect } from 'react-redux'

import Movie from "./Movie";

const MovieList = props => {
    return (
        <div>
            {props.movies.map(movie => <Movie movie={movie} />)}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps, {})(MovieList);