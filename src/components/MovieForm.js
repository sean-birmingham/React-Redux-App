import React from "react";
import { connect } from "react-redux";
import { getMovies } from "../actions";

const MissionForm = props => {
    const handleGetMovies = event => {
        event.preventDefault();
        props.getMovies();
    }
    return (
        <div>
            {props.isFetchingData ? (
                <p>*fetching movies*</p>
            ) : (
                    <button onClick={handleGetMovies}>get movies</button>
                )}
        </div >
    )
}

const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData
    }
}

export default connect(mapStateToProps, { getMovies })(MissionForm);