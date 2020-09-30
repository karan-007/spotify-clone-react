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
    Promise.all([ fetchTrack(), fetchArtist()]).then((res) => {
      setDone(true);
    });
  }, []);

  const fetchTrack = () => {
    fetchApi("/albums").then((res) => setTrack(res));
  };


  const fetchArtist = () => {
    fetchApi("/artists").then((res) => setArtist(res));
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
                  onClick={() => goto(`/track/${song.track.id}`)}
                  key={song.track.id}
                  name={song.track.name}
                  artist={song.track.artists}
                  img={song.track.album.images[0].url}
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
