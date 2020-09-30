import React, { useState, useEffect } from 'react'
import '../style/Library.css'
import fetchApi from '../fetchApi'
import { withRouter } from 'react-router-dom'
import Card from './Card';

function Library({ history }) {
    const [playlist, setPlaylist] = useState();
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        fetchApi('/playlists')
        .then((data) => {
            setPlaylist(data);
            setToggle(true)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    function goto(link) {
        history.push(link)
    }

    let playListData = "loading";

    if (toggle) {
        playListData =
            <div className="playlist-cards">
                <h1>Your Library</h1>
                <div className="cardlist">
                    {playlist.map((list) => {
                        return <Card onClick={() => goto(`/playlist/${list.playlist_id}`)} className="list-card" key={list.playlist_id}  name={list.playlist_name}  />
                    })}
                </div>
            </div>

    }
    return (
        <div className="library">
            {playListData}
        </div>
    )
}

export default withRouter(Library)
