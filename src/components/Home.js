import React, { useState, useEffect } from 'react'
import '../style/home.css'
import fetchApi from '../fetchApi';
import Card from './Card'
import { withRouter } from 'react-router-dom'

function Home({ history }) {


    const [recentList, setRecent] = useState([]);
    const [topTrack, setTrack] = useState([]);
    const [topArtist, setArtist] = useState([]);
    const [done, setDone] = useState(false);

    let showData = "loading"

    useEffect(() => {
        Promise.all([fetchRecent(), fetchTrack(), fetchArtist()])
            .then((res) => {
                setDone(true)
            })
    }, [])

    const fetchRecent = () => {
        return new Promise((resolve, reject) => {
            fetchApi("https://api.spotify.com/v1/me/player/recently-played")
                .then(res => {
                    setRecent(res.items)
                    resolve("done")
                })
                .catch(err => {
                    console.log(err)
                })
        })
    }
    
const fetchTrack=()=>{
    fetch("http://localhost:3001/albums")
    .then(res=>console.log(res.json()))
    // .then(setTrack(res))
    // .then(console.log)
}
    
    // const fetchTrack = () => {
    //     return new Promise((resolve, reject) => {
    //         fetchApi("http://localhost:3001/albums")
    //             .then(res => {
    //                 console.log(res.items)
    //                 setTrack(res)
    //                 resolve("done")
    //             })
    //             .catch(err => {
    //                 console.log(err)
    //             })
    //     })
    // }

    // const fetchTrack = () => {
    //     return new Promise((resolve, reject) => {
    //         fetchApi("https://api.spotify.com/v1/me/top/tracks")
    //             .then(res => {
    //                 setTrack(res.items)
    //                 resolve("done")
    //             })
    //             .catch(err => {
    //                 console.log(err)
    //             })
    //     })
    // }

    const fetchArtist = () => {
        return new Promise((resolve, reject) => {
            fetchApi("https://api.spotify.com/v1/me/top/artists")
                .then(res => {
                    setArtist(res.items)
                    resolve("done")
                })
                .catch(err => {
                    console.log(err)
                })
        })
    }

    function goto(link) {
        // console.log("ds")
        history.push(link)
    }

    if (done) {
        // console.log(recentList, "recent Tracks")
        // console.log(topArtist, "top artist")
        // console.log(topTrack, "top track ")
        showData = <div>
            <div className="cardDiv">
                <h1>Your Top Tracks</h1>
                {/* <div className="cardList">
                    {topTrack.slice(0, 5).map((song) => {
                        // console.log(song)
                        // return <Card onClick={() => goto(`/track/${song.id}`)} key={song.id} name={song.name} artist={song.artists} img={song.album.images[0].url} />
                        return <Card onClick={() => goto(`/track/${song.id}`)} key={song.id} name={song.name} img={song.img_url} />
                    })}
                </div> */}
            </div>
            <div className="cardDiv">
                <h1>Your Top Artist</h1>
                <div className="cardList">
                    {topArtist.slice(0, 5).map((artist) => {
                        // console.log(artist)
                        return <Card onClick={() => goto(`/Artist/${artist.id}`)} key={artist.id} name={artist.name} data="Artist" img={artist.images[0].url} />
                    })}
                </div>
            </div>
            <div className="cardDiv">
                <h1>Recently Played</h1>
                <div className="cardList">
                    {recentList.slice(0, 5).map((song) => {
                        // console.log(song)
                        return <Card onClick={() => goto(`/track/${song.track.id}`)} key={song.track.id} name={song.track.name} artist={song.track.artists} img={song.track.album.images[0].url} />
                    })}
                </div>
            </div>
        </div>
    }

    return (
        <div className="body">
            {showData}
        </div>
    )
}

export default withRouter(Home)
