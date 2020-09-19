import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import "./Footer.css";
import { Grid, Slider } from "@material-ui/core";
import { play, pause } from '../store/index'

function Footer() {

    const dispatch = useDispatch();

    let toggle = false;
    let item = useSelector(state => state.player.songData)
    if (Object.keys(item).length != 0) {
        toggle = true;
    }

    const playing = useSelector(state => state.player.playing);
    const audio = useSelector(state => state.player.playingAudio);

    const playSong = () => {
        if (!playing) {
            audio.play();
            dispatch(play())
        }
    }
    const pauseSong = () => {
        if (playing) {
            audio.pause();
            dispatch(pause())
        }
    }
    return (
        <div className="footer">

            <div className="footer__left">
                {toggle ? (<img
                    className="footer__albumLogo"
                    src={item.track.album.images[0].url}
                    alt={item.track.name}
                />) : null}

                {toggle ? (
                    <div className="footer__songInfo">
                        <h4>{item.track.name}</h4>
                        <p>{item.track.artists.map((artist) => artist.name).join(", ")}</p>
                    </div>
                ) : (
                        <div className="footer__songInfo">
                            <h4>No song is playing</h4>
                            <p>...</p>
                        </div>
                    )}
            </div>

            <div className="footer__center">
                <PlayCircleOutlineIcon
                    fontSize="large"
                    className="footer__icon"
                    onClick={playSong}
                />
                <PauseCircleOutlineIcon
                    fontSize="large"
                    className="footer__icon"
                    onClick={pauseSong}
                />
            </div>
            <div className="footer__right">

            </div>
        </div>
    );
}

export default Footer;