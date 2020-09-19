import * as actionTypes from './actionTypes';
import fetchApi from '../../fetchApi'


export const playPause = () => {
    return {
        type: actionTypes.PLAY_PAUSE
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

export const fetchSong = (id) => {
    return (dispatch) => {
        fetchApi(`https://api.spotify.com/v1/tracks/${id}`)
            .then(res => {
                dispatch(songData(res))
            })
    }
}