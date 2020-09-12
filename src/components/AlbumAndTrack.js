import React, { useState, useEffect, useRef } from 'react'
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
    const [error, setError] = useState("");
    const [song, setsong] = useState();
    const [playing, setplaying] = useState();
    const [change, setchange] = useState(0);

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

    console.log(toggle)



    // console.log(type)

    async function fetchData(id, type) {
        if (type === "track") {
            let data = await fetchApi(`https://api.spotify.com/v1/tracks/${id}`)
            setplaylist(data)
            setToggle(true);
            setchange(change + 1)
        }
        if (type === "artist") {
            let data = await fetchApi(`https://api.spotify.com/v1/artists/${id}`)
            setList(data)
            let tracks = await fetchApi(`https://api.spotify.com/v1/artists/${id}/top-tracks?country=IN`)
            setplaylist(tracks.tracks)
            setToggle(true);
            setchange(change + 1)
        }
        if (type === "album") {
            let data = await fetchApi(`https://api.spotify.com/v1/albums/${id}`)
            setplaylist(data.tracks.items)
            setList(data)
            setToggle(true);
            setchange(change + 1)
        }
    }


    let errorData = "";

    if (error) {
        errorData = "error";
    }

    const playSong = (a) => {
        if (playing) {
            song.pause();
            let newSong = new Audio(a);
            newSong.play();
            setsong(newSong);
            setplaying(true)
        } else {
            let newSong = new Audio(a);
            newSong.play();
            setsong(newSong);
            setplaying(true)
        }
    }

    if (toggle) {
        console.log(playlist)
        console.log(list)

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
                    audio={song.preview_url}
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
                    audio={playlist.preview_url}
                    play={playSong} />
        } else {
            console.log(list)
            console.log(playlist)
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
                    audio={song.preview_url}
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
