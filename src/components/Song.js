import React from 'react'
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import '../style/Song.css'

function Song({ img, name, artists, album, duration, data, play }) {

    function handleClick(){
        new Audio("audio_url").play();
    }

    return (
        <div className="song">
            <PlayArrowRoundedIcon onClick={() => play(data)} className="song-icon" fontSize="large" />

            {/* <PlayArrowRoundedIcon onClick={() => handleClick} className="song-icon" fontSize="large" />
             */}
            <img className="song-img" src={img} alt="" />
            <div className="song-info">
                <h4>{name}</h4>
                {/* <span>
                    {artists.map((artist) => artist.name).join(", ")}
                </span> */}
            </div>
            <p className="song-album">{album}</p>
            <p className="song-duration">{duration} s</p>
        </div>
    )
}
export default Song
