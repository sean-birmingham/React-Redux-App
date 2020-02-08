import { FETCH_MOVIES, UPDATE_MOVIES, SET_ERROR, FETCH_CHARACTERS, UPDATE_CHARACTERS } from "../actions";

const initialState = {
    movies: [],
    characters: [],
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
                characters: [],
                isFetchingData: false
            }
        case SET_ERROR:
            return {
                ...state,
                isFetchingData: false,
                error: action.payload
            }
        case FETCH_CHARACTERS:
            return {
                ...state,
                isFetchingData: true,
                characters: []
            }
        case UPDATE_CHARACTERS:
            return {
                ...state,
                characters: action.payload,
                movies: [],
                isFetchingData: false
            }
        default:
            return state;
    }
}