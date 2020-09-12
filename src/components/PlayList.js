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

    console.log(toggle)



    // console.log(type)

    async function fetchData(id) {
        let data = await fetchApi(`https://api.spotify.com/v1/playlists/${id}`)
        console.log(data)
        setplaylist(data.tracks.items)
        setList(data)
        setToggle(true);
        setchange(change + 1)
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
                audio={song.track.preview_url}
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
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>
            </div>
            {songs}
        </div>
    )
}

export default PlayList
