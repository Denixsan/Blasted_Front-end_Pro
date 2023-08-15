import {SET_PLAYERS, RESET_PLAYERS, SET_TEMP_USER_NAME, RESET_DATA_BATTLE} from "./battle.actions";

const initialState = {
    playerOneImage: null,
    playerTwoImage: null,
    playerOneName: '',
    playerTwoName: '',
}

export const battleReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PLAYERS:
            return {
                ...state,
                [`${action.id}Name`]: action.userName,
                [`${action.id}Image`]: `https://github.com/${action.userName}.png?size200`,
            }
        case SET_TEMP_USER_NAME:
            return {
                ...state,
                [`${action.id}Name`]: action.userName,
            }
        case RESET_PLAYERS:
            return {
                ...state,
                [`${action.id}Name`]: '',
                [`${action.id}Image`]: null,
            }
        case RESET_DATA_BATTLE:
            return initialState;
        default:
            return state;
    }

}