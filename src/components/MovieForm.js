import React from "react";
import { connect } from "react-redux";
import { getMovies } from "../actions";
import styled from "styled-components";

const Button = styled.button`
    border: none;
    cursor: pointer;
    padding: 11px 10px;
    &:hover {
        background-color:  #304795;
        color: #fff;
    }
`

const MovieForm = props => {
    const handleGetMovies = event => {
        event.preventDefault();
        props.getMovies();
    }
    return (
        <div>
            {props.isFetchingData ? (
                <p>*fetching movies*</p>
            ) : (
                    <Button className="fetch-movies" onClick={handleGetMovies}>get movies</Button>
                )}
        </div >
    )
}

const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData
    }
}

export default connect(mapStateToProps, { getMovies })(MovieForm);