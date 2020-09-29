import React ,{useState}from 'react'
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import '../style/Song.css'

function Song({ img, name, artists, album, duration, data, play }) {

    const [drop,setDrop]=useState(false)

    function handleClick(){
     setDrop(!drop)
    }

    return (
        <div className="cover-song">
        <div className="song">
            <PlayArrowRoundedIcon onClick={() => play(data)} className="song-icon" fontSize="large" />
            <img className="song-img" src={img} alt="" />
            <div className="song-info">
                <h4>{name}</h4>
                <span>
                    {artists}
                </span>
            </div>
            <p className="song-album">{album}</p>
            <p className="song-duration">{duration} s</p>
        <MoreHorizIcon onClick={handleClick}/>
        </div>
        <div style={{display:drop?"block":"none"}}>
        <div className="dropDownContent">
        <p>Add to playlist</p>
        <p>Remove from playlist</p>
        </div>
        </div>
        </div>
    )
}
export default Song
