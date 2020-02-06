import React from 'react';
import { connect } from 'react-redux'

import Movie from "./Movie";

const MovieList = props => {
    return (
        <div>
            {props.error ? (
                <div className="error">{props.error}</div>
            ) : (
                    props.movies.map(movie => <Movie key={movie.id} movie={movie} />)
                )}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        movies: state.movies,
        error: state.error
    }
}

export default connect(mapStateToProps, {})(MovieList);