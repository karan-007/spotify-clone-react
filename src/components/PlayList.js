import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { songData, saveAudio, play, pause } from '../store/index'
import '../style/PlayList.css'
import fetchApi from '../fetchApi'
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Song from './Song'


function PlayList({ match }) {
    const [playlist, setplaylist] = useState([]);
    const [list, setList] = useState({});
    const [toggle, setToggle] = useState(false);
    const [like, setLike] = useState(false);
  
  function handleClick() {
    setLike(!like);
  }


    const playing = useSelector(state => state.player.playing);
    const audio = useSelector(state => state.player.playingAudio);

    const dispatch = useDispatch();


    let playListData = "loading";
    let songs = "loading";
    const mounted = useRef();
    let id = match.params.id;
    useEffect(() => {
        if (!mounted.current) {
            fetchData(id);
            mounted.current = true;
        } else {
            fetchData(id);
        }
    }, [id])




    // console.log(type)

    async function fetchData(id) {
        let data = await fetchApi(`https://api.spotify.com/v1/playlists/${id}`)
        setplaylist(data.tracks.items)
        setList(data)
        setToggle(true);
    }




    const playSong = (data) => {
        console.log(data)
        if (playing) {
            audio.pause();
            dispatch(pause())
            dispatch(songData(data.track));
            let songAudio = data.track.preview_url;
            songAudio = new Audio(songAudio);
            songAudio.play();
            dispatch(saveAudio(songAudio));
            dispatch(play())
        } else {
            dispatch(songData(data.track));
            let songAudio = data.track.preview_url;
            let playSong = new Audio(songAudio);
            playSong.play();
            dispatch(saveAudio(playSong))
            dispatch(play())
        }
    }

    if (toggle) {


        playListData =
            <div className="body-info">
                <img src={list.images[0].url} alt="" />
                <div className="body-infoText">
                    <strong>{list.type}</strong>
                    <h2>{list.name}</h2>
                    <p>{list.description}</p>
                </div>
            </div>
        songs = playlist.map((song) => {
            return <Song key={song.track.id}
                img={song.track.album.images[0].url}
                name={song.track.name}
                artists={song.track.artists}
                album={song.track.album.name}
                duration={song.track.duration_ms}
                data={song}
                play={playSong} />
        })
    }
    return (
        <div className="playlist">
            {playListData}
            <div className="body-songs">
                <div className="body-icons">
                    <PlayCircleFilledIcon
                        className="body-shuffle"
                    />
                    <div
          onClick={handleClick}
          style={{
            color: like ? "red" : "inherit",
          }}>
          <FavoriteIcon fontSize="large" className="fav-btn"/></div>
                </div>
            </div>
            {songs}
        </div>
    )
}

export default PlayList
