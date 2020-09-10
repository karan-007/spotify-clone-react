import React, { useState, useEffect, useRef } from 'react'
import './PlayList.css'
import fetchApi from '../fetchApi'

function PlayList({ match }) {
    // console.log(match.params.id)
    const [playlist, setplaylist] = useState([]);
    const [list, setList] = useState({});
    const [toggle, setToggle] = useState(false);
    // console.log(toggle)
    const [error, setError] = useState("");
    let playListData = "loading";
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
        console.log(data);
        setplaylist(data.tracks.items)
        setList(data)
        // playListData = playlist.map((song) => {
        //     return <h1 key={song.track.id}>{song.track.name}</h1>
        // })
    }


    let errorData = "";

    if (error) {
        errorData = "error";
    }
    console.log(playlist)
    console.log(list)
    return (
        <div className="playlist">
            {playlist.map((song) => {
                return <h1>{song.track.name}</h1>
            })}
            {/* <div className="body__info">
                <img src={list.images[0].url} alt="" />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{list.description}</p>
                </div>
            </div> */}

        </div>
    )
}

export default PlayList


// import React, { Component } from 'react'
// import './PlayList.css';
// import fetchApi from '../fetchApi';

// export class PlayList extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             playList: [],
//             done: false
//         }
//     }
//     componentDidMount() {
//         let id = this.props.match.params.id;
//         this.mounted = true;
//         fetchApi(`https://api.spotify.com/v1/playlists/${id}`)
//             .then(res => {
//                 console.log("api", res);
//                 if (this.mounted) {
//                     this.setState({ playList: [res.tracks.items], done: true })
//                 }
//             })

//     }

//     componentWillUnmount() {
//         this.mounted = false
//     }


//     render() {
//         console.log("state", this.state.playList)
//         let data = ""
//         // if (this.state.done) {
//         //     data = this.state.playList.map((song) => {
//         //         return <h2>{song.track.name}</h2>
//         //     })
//         // }
//         return (
//             <div className="playlist">
//                 {data}
//             </div>
//         )
//     }
// }

// export default PlayList
