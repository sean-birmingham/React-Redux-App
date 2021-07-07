import React from "react";
import { connect } from "react-redux";
import { getMovies, getCharacters } from "../actions";
import styled from "styled-components";

const Button = styled.button`
    border: none;
    cursor: pointer;
    padding: 11px 10px;
    margin-left: 10px;
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

    const handleGetCharacters = event => {
        event.preventDefault();
        props.getCharacters();
    }

    return (
        <div>
            {props.isFetchingData ? (
                <p>*loading data*</p>
            ) : (
                    <>
                        <Button onClick={handleGetMovies}>get movies</Button>
                        <Button onClick={handleGetCharacters}>get characters</Button>
                    </>
                )}
        </div >
    )
}

const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData
    }
}

export default connect(mapStateToProps, { getMovies, getCharacters })(MovieForm);