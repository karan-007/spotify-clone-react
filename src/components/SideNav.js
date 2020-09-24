import React, { useState, useEffect } from 'react'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import './sideNav.css'
import NavOption from './NavOption'
import { Link } from 'react-router-dom'
import fetchApi from '../fetchApi'

function SideNav() {

    const [playlist, setplaylist] = useState();
    const [toggle, setToggle] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchApi("https://api.spotify.com/v1/users/xh6w6d5ztzy8f62qjz9yic4nj/playlists")
            .then(res => {
                setplaylist(res.items);
                setToggle(true);
            })
            .catch(err => {
                console.log(err)
                setError(err);
            })
    }, [])

    let playListData = "loading";
    let errorData = "";

    if (error) {
        errorData = "error";
    }


    if (toggle) {
        playListData = playlist.map((list) => {
            return <Link to={`/playlist/${list.id}`} key={list.id} className="link-style"><NavOption title={list.name} /></Link>
        })
    }

    return (
        < div className="sideNav" >
            <Link to="/">
                <img
                    className="sideNav-logo"
                    src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                    alt=""
                />
            </Link>
            <Link className="link-style" to="/" >
                <NavOption Icon={HomeIcon} title="Home" />
            </Link>
            <Link className="link-style" to="/search">
                <NavOption Icon={SearchIcon} title="Search" />
            </Link>
            <Link className="link-style" to="/library">
                <NavOption Icon={LibraryMusicIcon} title="Your Library" />
            </Link>
            <br />
            <br />
            <strong className="sideNav-title">PLAYLISTS</strong>
            <hr />
            {playListData}
        </div >
    )
}

export default SideNav
