import React, { useState, useEffect } from 'react'
import '../style/Library.css'
import fetchApi from '../fetchApi'
import { withRouter } from 'react-router-dom'
import Card from './Card';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from '../apiConfig/API'

function Library({ history }) {
    const [playlist, setPlaylist] = useState();
    const [data,setUserData]=useState('')
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
            fetchApi('/user/profile')
      .then((data) => {
        setUserData(data);
      })
      .catch(err => {
        console.log(err)
      })
    }, [])

    function handleClick(pid){
        axios
        .delete("delete/playlist/", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          data: {
            playlistId: pid,
            userId: data[0].username,
          },
        })
        .then(alert("playlist deleted"))
        .catch((err) => console.log(err));
    }

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
                        return <Card
                            onClick={() => goto(`/playlist/${list.playlist_id}`)}
                            className="list-card" key={list.playlist_id}
                            img={list.img_url.length === 0 ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARAAAAC6CAMAAABRJOIbAAAAMFBMVEXm6Of////4+fnw8fHo6unt7u38/Pzk5uXz9PPw8vHx8/L3+Pfn6Oj7+vvt7+39/v2JQ8GPAAACH0lEQVR4nO3a0VLDIBCFYaALJKW27/+2AkkaQtR6VRz3/+6Io4NnFggQYwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN5CfNa3KxnWp6Emm92fTe/sJswDuzXOtf7zl7XlbWsa2rNBxDWJ3MIhEOtf/PK/dPvYE5mPeVg3unNDSFrGh4h0BVJKRBajO/lWayIuuT4PG9Jq0hOJ+C2RH4X76z/1P7g8ffwmEaukRspCO5dYXlKyCJeFJcj6grYNj+wciJIlZ14qZE8kTD6vKn4+1YySQC7LYHjWSHj+xAe1gdjp4qYtkSQ1HmP6qVZTIDWUuCbirim4+t5xc5oDsaltLJVy2NuoC6QkMnUB9G0F2qLwx2ZefOShOpAybzQb3vJ64lQHUh9c90ByxSTNgYRoJK8u+6mZb+PRGEg5P3PNI3+YVfUFUuaQZJ2Y++M5h6geMqUi8ngpiWxzSHuGpjCQ/CJSSsKZeFlLpD2FVxhIPWVPJYi47uyc8kBc2djljX+ePfzDdjQGUjcwRqRcY/a7f52BWLffTfWXEjoDsWGSmB9HMbEbNUoDKZm4lIJ9+HisESWB+HMgWy5yTCSN7up7nK8v90SOL2Zabr5Pq0mbSFMjSq5lMv/9td1eI0FLfby2fkCi83OiLx0+qYGhRr5QEwlxdDf+juVbzdG9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIb6BG0BCzA/r/PHAAAAAElFTkSuQmCC' : list.img_url}
                            name={list.playlist_name}
                            icon={<DeleteIcon onClick={()=>handleClick(list.playlist_id)} className="delete"/>}
                            
                        />
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
