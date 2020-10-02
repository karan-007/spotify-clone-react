import React, { useState, useEffect } from "react";
import "../style/home.css";
import fetchApi from "../fetchApi";
import Card from "./Card";
import { withRouter } from "react-router-dom";

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
    history.push(link);
  }

  if (done) {
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
              return (
                <Card onClick={() => goto(`/Artist/${artist.id}`)} key={artist.id} name={artist.name} img={artist.img_url} />
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
