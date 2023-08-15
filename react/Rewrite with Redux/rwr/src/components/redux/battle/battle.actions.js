export const SET_PLAYERS = 'SET_PLAYERS';
export const RESET_PLAYERS = 'RESET_PLAYERS';
export const SET_TEMP_USER_NAME = 'SET_TEMP_USER_NAME';
export const RESET_DATA_BATTLE = 'RESET_DATA_BATTLE';

export const setTempUserName = (id, userName) => ({
    type: SET_TEMP_USER_NAME,
    id,
    userName,
});

export const setPlayers = (id, userName) => ({
    type: SET_PLAYERS,
    id,
    userName,
})

export const resetPlayers = (id) => ({
    type: RESET_PLAYERS,
    id,
})

export const resetBattleData = () => ({
    type: RESET_DATA_BATTLE,
})
