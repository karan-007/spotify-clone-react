import React, { useState, useEffect } from 'react'
import './home.css'
import fetchApi from '../fetchApi';

function Home() {

    const [recentList, setRecent] = useState([]);
    const [topTrack, setTrack] = useState([]);
    const [topArtist, setArtist] = useState([]);
    const [done, setDone] = useState(false);

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
    }

    return (
        <div className="body">
            <h1>this is body</h1>
        </div>
    )
}

export default Home
