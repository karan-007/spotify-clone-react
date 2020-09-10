import React, { useState, useEffect } from 'react'
import './home.css'
import fetchApi from '../fetchApi';
import Card from './Card'

function Home() {

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

    const fetchTrack = () => {
        return new Promise((resolve, reject) => {
            fetchApi("https://api.spotify.com/v1/me/top/tracks")
                .then(res => {
                    setTrack(res.items)
                    resolve("done")
                })
                .catch(err => {
                    console.log(err)
                })
        })
    }

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

    if (done) {
        console.log(recentList, "recent Tracks")
        console.log(topArtist, "top artist")
        console.log(topTrack, "top track ")
        showData = <div>
            <div className="cardDiv">
                <h1>Your Top Tracks</h1>
                <div className="cardList">
                    {topTrack.slice(0, 5).map((song) => {
                        // console.log(song)
                        return <Card key={song.id} name={song.name} artist={song.artists} img={song.album.images[0].url} />
                    })}
                </div>
            </div>
            <div className="cardDiv">
                <h1>Your Top Artist</h1>
                <div className="cardList">
                    {topArtist.slice(0, 5).map((artist) => {
                        // console.log(artist)
                        return <Card key={artist.id} name={artist.name} data="Artist" img={artist.images[0].url} />
                    })}
                </div>
            </div>
            <div className="cardDiv">
                <h1>Recently Played</h1>
                <div className="cardList">
                    {recentList.slice(0, 5).map((song) => {
                        // console.log(artist)
                        return <Card key={song.track.id} name={song.track.name} artist={song.track.artists} img={song.track.album.images[0].url} />
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

export default Home
