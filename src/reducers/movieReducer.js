import { FETCH_MOVIES, UPDATE_MOVIES, SET_ERROR } from "../actions";

const initialState = {
    movies: [],
    isFetchingData: false,
    error: ""
}

export const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES: {
            return {
                ...state,
                isFetchingData: true,
                movies: []
            }
        }
        case UPDATE_MOVIES:
            return {
                ...state,
                movies: action.payload,
                isFetchingData: false
            }
        case SET_ERROR:
            return {
                ...state,
                isFetchingData: false,
                error: action.payload
            }
        default:
            return state;
    }
}