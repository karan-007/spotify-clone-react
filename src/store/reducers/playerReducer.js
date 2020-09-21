import * as actionTypes from '../actions/actionTypes'

const initialState = {
    playing: false,
    songData: {},
    error: '',
    playingAudio: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PLAY_SONG:
            return {
                ...state,
                playing: true
            }
        case actionTypes.PAUSE_SONG:
            return {
                ...state,
                playing: false
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
        case actionTypes.SAVE_AUDIO:
            return {
                ...state,
                playingAudio: action.payload
            }
        default:
            return state
    }
}

export default reducer;