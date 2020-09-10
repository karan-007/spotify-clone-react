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

    async function fetchData(id) {
        let data = await fetchApi(`https://api.spotify.com/v1/playlists/${id}`)
        setplaylist(data.tracks.items)
        setList(data)
        setToggle(true);
    }


    let errorData = "";

    if (error) {
        errorData = "error";
    }
    if (toggle) {
        playListData =
            <div className="body-info">
                <img src={list.images[0].url} alt="" />
                <div className="body-infoText">
                    <strong>PLAYLIST</strong>
                    <h2>{list.name}</h2>
                    <p>{list.description}</p>
                </div>
            </div>
        songs = playlist.map((song) => {
            return <Song key={song.track.id} track={song.track} />
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
