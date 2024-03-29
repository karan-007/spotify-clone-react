import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { songData, saveAudio, play, pause } from '../store/index'
import './PlayList.css'
import fetchApi from '../fetchApi'
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Song from './Song'

function PlayList({ match }) {
    const [playlist, setplaylist] = useState([]);
    const [list, setList] = useState({});
    const [toggle, setToggle] = useState(false);

    const playing = useSelector(state => state.player.playing);
    const audio = useSelector(state => state.player.playingAudio);

    const dispatch = useDispatch();


    let type = match.path.split("/")[1]
    let playListData = "loading";
    let songs = "loading";
    const mounted = useRef();
    let id = match.params.id;
    useEffect(() => {
        if (!mounted.current) {
            fetchData(id, type);
            mounted.current = true;
        } else {
            fetchData(id, type);
        }
    }, [id, type])





    // console.log(type)

    async function fetchData(id, type) {
        if (type === "track") {
            let data = await fetchApi(`https://api.spotify.com/v1/tracks/${id}`)
            setplaylist(data)
            setToggle(true);

        }
        if (type === "artist") {
            let data = await fetchApi(`https://api.spotify.com/v1/artists/${id}`)
            setList(data)
            let tracks = await fetchApi(`https://api.spotify.com/v1/artists/${id}/top-tracks?country=IN`)
            setplaylist(tracks.tracks)
            setToggle(true);

        }
        if (type === "album") {
            let data = await fetchApi(`https://api.spotify.com/v1/albums/${id}`)
            setplaylist(data.tracks.items)
            setList(data)
            setToggle(true);

        }
    }




    const playSong = (data) => {
        if (playing) {
            audio.pause();
            dispatch(pause())
            dispatch(songData(data));
            let songAudio = data.preview_url;
            songAudio = new Audio(songAudio);
            songAudio.play();
            dispatch(saveAudio(songAudio));
            dispatch(play())
        } else {
            dispatch(songData(data));
            let songAudio = data.preview_url;
            let playSong = new Audio(songAudio);
            playSong.play();
            dispatch(saveAudio(playSong))
            dispatch(play())
        }
    }

    if (toggle) {

        if (type === "artist") {
            playListData =
                <div className="body-info">
                    <img src={list.images[0].url} alt="" />
                    <div className="body-infoText">
                        <strong>{list.type}</strong>
                        <h2>{list.name}</h2>
                    </div>
                </div>
            songs = playlist.map((song) => {
                return <Song key={song.id}
                    img={song.album.images[0].url}
                    name={song.name}
                    artists={song.artists}
                    album={song.album.name}
                    duration={song.duration_ms}
                    data={song}
                    play={playSong} />
            })
        } else if (type === "track") {
            playListData =
                <div className="body-info">
                    <img src={playlist.album.images[0].url} alt="" />
                    <div className="body-infoText">
                        <strong>{playlist.type}</strong>
                        <h2>{playlist.name}</h2>
                        <p>{playlist.album.name}</p>
                    </div>
                </div>
            songs =
                <Song key={playlist.id}
                    img={playlist.album.images[0].url}
                    name={playlist.name}
                    artists={playlist.artists}
                    album={playlist.album.name}
                    duration={playlist.duration_ms}
                    data={playlist}
                    play={playSong} />
        } else {
            playListData =
                <div className="body-info">
                    <img src={list.images[0].url} alt="" />
                    <div className="body-infoText">
                        <strong>{list.type}</strong>
                        <h2>{list.name}</h2>
                        <p>{list.label}</p>
                    </div>
                </div>
            songs = playlist.map((song) => {
                return <Song key={song.id}
                    img={list.images[0].url}
                    name={song.name}
                    artists={song.artists}
                    album={list.name}
                    duration={song.duration_ms}
                    data={song}
                    play={playSong} />
            })
        }
    }
    return (
        <div className="playlist">
            {playListData}
            <div className="body-songs">
                <div className="body-icons">
                    <PlayCircleFilledIcon
                        className="body-shuffle"
                    />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>
            </div>
            {songs}
        </div>
    )
}

export default PlayList
