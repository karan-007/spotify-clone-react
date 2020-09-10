import React, { useState } from 'react'
import './Search.css'
import fetchApi from '../fetchApi';
import Card from './Card'

function Search() {

    const [searchData, setData] = useState();
    const [loaded, setLoad] = useState(false);
    const search = (e) => {
        if (e.target.value != "") {
            fetchApi(`https://api.spotify.com/v1/search?q=${e.target.value}&type=track%2Cartist%2Cplaylist%2Calbum`)
                .then((res) => {
                    console.log(res)
                    setData(res);
                    setLoad(true);
                })
        }
    }

    let display = "";

    if (loaded) {
        display = <div>
            <div>
                {searchData.tracks.items.slice(0, 5).map((song) => {
                    return <Card key={song.id} name={song.name} data={song.album.name} img={song.album.images[0].url} />
                })}
            </div>
        </div>
    } else {
        display = "loading"
    }

    return (
        <div className="search-body">
            <div className="search-topnav">
                <input className="search-input" onChange={search} placeholder="Search for Songs, Artists or Albums" />
            </div>
            <div className="display-div">
                {display}
            </div>
        </div>
    )
}

export default Search
