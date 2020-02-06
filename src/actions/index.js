import axios from "axios";

export const FETCH_MOVIES = "FETCH_MOVIES";
export const UPDATE_MOVIES = "UPDATE_MOVIES";
export const SET_ERROR = "SET_ERROR";

export const getMovies = () => dispatch => {
    dispatch({ type: FETCH_MOVIES });
    axios
        .get("https://ghibliapi.herokuapp.com/films/")
        .then(res => {
            console.log(res)
            dispatch({ type: UPDATE_MOVIES, payload: res.data })
        })
        .catch(err => dispatch({ type: SET_ERROR, payload: "error fetching movies" }))
}