import * as actionTypes from '../actions/actionTypes'

const initialState = {
    playing: false,
    songData: {},
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PLAY_PAUSE:
            return {
                ...state,
                playing: !state.playing
            }
        case actionTypes.SAVE_SONG_DATA:
            return {
                ...state,
                songData: action.payload
            }
        case actionTypes.FETCH_SONG_FAIL:
            return {
                ...state,
                playing: false,
                songData: {},
                error: action.payload
            }
        default:
            return state
    }
}

export default reducer;