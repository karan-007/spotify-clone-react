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

function Footer() {
    let toggle = false;
    let item = useSelector(state => state.player.songData)
    if (Object.keys(item).length != 0) {
        toggle = true;
    }
    console.log(item)

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
                />
                <PauseCircleOutlineIcon
                    fontSize="large"
                    className="footer__icon"
                />
            </div>
            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider aria-labelledby="continuous-slider" />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Footer;