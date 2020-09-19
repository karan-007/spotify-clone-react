import * as actionTypes from './actionTypes';

export const play = () => {
    return {
        type: actionTypes.PLAY_SONG
    }
}

export const pauseSong = () => {
    return {
        type: actionTypes.PAUSE_SONG
    }
}

export const songData = (data) => {
    return {
        type: actionTypes.SAVE_SONG_DATA,
        payload: data
    }
}

export const fetchSongFail = (error) => {
    return {
        type: actionTypes.FETCH_SONG_FAIL,
        payload: error
    }
}

export const saveAudio = (audio) => {
    return {
        type: actionTypes.SAVE_AUDIO,
        payload: audio
    }
}