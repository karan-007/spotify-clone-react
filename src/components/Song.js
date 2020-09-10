import React from 'react'
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import './Song.css'

function Song({ track }) {
    return (
        <div className="song">
            <PlayArrowRoundedIcon className="song-icon" fontSize="large" />
            <img className="song-img" src={track.album.images[0].url} alt="" />
            <div className="song-info">
                <h4>{track.name}</h4>
                <span>
                    {track.artists.map((artist) => artist.name).join(", ")}
                </span>
            </div>
            <p className="song-album">{track.album.name}</p>
            <p className="song-duration">{track.duration_ms} s</p>
        </div>
    )
}

export default Song
