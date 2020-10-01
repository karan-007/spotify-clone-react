import React, { useState, useEffect } from "react";
import "../style/home.css";
import fetchApi from "../fetchApi";
import Card from "./Card";
import { withRouter } from "react-router-dom";
import axios from "../apiConfig/API";

function Home({ history }) {
  const [recentList, setRecent] = useState([]);
  const [topTrack, setTrack] = useState([]);
  const [topArtist, setArtist] = useState([]);
  const [done, setDone] = useState(false);

  let showData = "loading";

  useEffect(() => {
    Promise.all([ fetchTrack(), fetchArtist(),fetchRecent()]).then((res) => {
      setDone(true);
    });
  }, []);

  const fetchTrack = () => {
    fetchApi("/albums").then((res) => setTrack(res));
  };


  const fetchArtist = () => {
    fetchApi("/artists").then((res) => setArtist(res));
  };

  const fetchRecent = () => {
    fetchApi("/playlists").then((res) => setRecent(res));
  };

  function goto(link) {
    // console.log("ds")
    history.push(link);
  }

  if (done) {
    // console.log(recentList, "recent Tracks")
    // console.log(topArtist, "top artist")
    // console.log(topTrack, "top track ")
    showData = (
      <div>
        <div className="cardDiv">
          <h1>Albums</h1>
          <div className="cardList">
            {topTrack.slice(0, 5).map((song) => {
              // console.log(song)
              return <Card onClick={() => goto(`/Album/${song.id}`)} key={song.id} name={song.name} img={song.img_url} />;
            })}
          </div>
        </div>
        <div className="cardDiv">
          <h1>Artists</h1>
          <div className="cardList">
            {topArtist.slice(0, 5).map((artist) => {
              // console.log(artist)
              return (
                <Card onClick={() => goto(`/Artist/${artist.id}`)} key={artist.id} name={artist.name} img={artist.img_url} />
              );
            })}
          </div>
        </div>
        <div className="cardDiv">
          <h1>Playlists</h1>
          <div className="cardList">
            {recentList.slice(0, 5).map((song) => {
              // console.log(song)
              return (
                <Card
                  onClick={() => goto(`/playlists/${song.playlist_id}`)}
                  key={song.playlist_id}
                  name={song.playlist_name}
                  img={song.img_url.length === 0 ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARAAAAC6CAMAAABRJOIbAAAAMFBMVEXm6Of////4+fnw8fHo6unt7u38/Pzk5uXz9PPw8vHx8/L3+Pfn6Oj7+vvt7+39/v2JQ8GPAAACH0lEQVR4nO3a0VLDIBCFYaALJKW27/+2AkkaQtR6VRz3/+6Io4NnFggQYwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN5CfNa3KxnWp6Emm92fTe/sJswDuzXOtf7zl7XlbWsa2rNBxDWJ3MIhEOtf/PK/dPvYE5mPeVg3unNDSFrGh4h0BVJKRBajO/lWayIuuT4PG9Jq0hOJ+C2RH4X76z/1P7g8ffwmEaukRspCO5dYXlKyCJeFJcj6grYNj+wciJIlZ14qZE8kTD6vKn4+1YySQC7LYHjWSHj+xAe1gdjp4qYtkSQ1HmP6qVZTIDWUuCbirim4+t5xc5oDsaltLJVy2NuoC6QkMnUB9G0F2qLwx2ZefOShOpAybzQb3vJ64lQHUh9c90ByxSTNgYRoJK8u+6mZb+PRGEg5P3PNI3+YVfUFUuaQZJ2Y++M5h6geMqUi8ngpiWxzSHuGpjCQ/CJSSsKZeFlLpD2FVxhIPWVPJYi47uyc8kBc2djljX+ePfzDdjQGUjcwRqRcY/a7f52BWLffTfWXEjoDsWGSmB9HMbEbNUoDKZm4lIJ9+HisESWB+HMgWy5yTCSN7up7nK8v90SOL2Zabr5Pq0mbSFMjSq5lMv/9td1eI0FLfby2fkCi83OiLx0+qYGhRr5QEwlxdDf+juVbzdG9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIb6BG0BCzA/r/PHAAAAAElFTkSuQmCC' : song.img_url}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return <div className="body">{showData}</div>;
}

export default withRouter(Home);
