/* eslint-disable */

import React, { useState } from 'react'
import '../style/Search.css'
import { withRouter } from 'react-router-dom'
import { postApiWithAuth } from '../postApi'
import { songData, saveAudio, play, pause } from '../store/index'
import { useSelector, useDispatch } from 'react-redux'
import Song from './Song'

function Search() {

    const [searchData, setData] = useState();
    const [loaded, setLoad] = useState(false);
    const dispatch = useDispatch();

    const playing = useSelector(state => state.player.playing);
    const audio = useSelector(state => state.player.playingAudio);

    const search = (e) => {
        e.preventDefault();
        if (e.target.value != "") {
            postApiWithAuth(`/search`, { songName: e.target.value })
                .then((res) => {
                    setData(res);
                    setLoad(true);
                })
        }
    }    

    let display = "";
    
    const playSong = (data) => {
        console.log(data)
        if (playing) {
            audio.pause();
            dispatch(pause())
            dispatch(songData(data));
            let songAudio = data.audio_url;
            songAudio = new Audio(songAudio);
            songAudio.play();
            dispatch(saveAudio(songAudio));
            dispatch(play())
        } else {
            dispatch(songData(data));
            let songAudio = data.audio_url;
            let playSong = new Audio(songAudio);
            playSong.play();
            dispatch(saveAudio(playSong))
            dispatch(play())
        }
    }


    if (loaded) {
        display = <div>
            <div className="search-container-div">
                <h1>Top Songs</h1>
                <div>
                    {searchData.map((song) => {
                        return (<Song key={song.song_id}
                            img={song.img_url}
                            name={song.song_name}
                            artists={song.artist_name}
                            duration={song.duration}
                            data={song}
                            play={playSong} />)
                    })}
                </div>
            </div>
        </div>
    }


    return (
        <div className="search-body">
            <div className="search-topnav">
                <input className="search-input" onChange={search} placeholder="Search for Songs, Artists or Albums" />
            </div>
            <div className="display-div">
                {display}
            </div>
        </div>
    )
}

export default withRouter(Search)
