import {SET_WINNER, SET_LOSER, SET_ERROR, RESET_DATA_RESULT} from "./result.actions";

const initialState = {
    loading: true,
    winner: [],
    loser: [],
    error: null,
}

export const resultReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_WINNER:
            return {
                ...state,
                loading: false,
                error: null,
                winner: action.payload
            }
        case SET_LOSER:
            return {
                ...state,
                loading: false,
                error: null,
                loser: action.payload
            }
        case SET_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case RESET_DATA_RESULT:
            return initialState;
        default:
            return {
                ...state
            }
    }
}