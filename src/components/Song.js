import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavOption from "./NavOption";
import PlayArrowRoundedIcon from "@material-ui/icons/PlayArrowRounded";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import fetchApi from "../fetchApi";
import { postApiWithAuth } from "../postApi";

import "../style/Song.css";

function Song({ img, name, artists, album, duration, data, play }) {
  const [drop, setDrop] = useState(false);
  const [drop1, setDrop1] = useState(false);
  const [playlist1, setPlaylist1] = useState("");
  const [toggle, setToggle] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchApi("/playlists")
      .then((data) => {
        setPlaylist1(data);
        //    console.log(data);
        setToggle(true);
      })
      .catch((err) => {
        //  console.log(err);
        setError(err);
      });
  }, []);

  function handlePlaylist(pid, sid) {
    postApiWithAuth("playlists/add/song", { playlistId: pid, songId: sid })
      .then(alert("added"))
      .catch((err) => console.log(err));
  }

  if (toggle) {
    var playListData = playlist1.map((list) => {
      return (
        <Link
          onClick={() => handlePlaylist(list.playlist_id, data.song_id)}
          key={list.playlist_id}
          className="link-style"
        >
          <NavOption title={list.playlist_name} />
        </Link>
      );
    });
  }

  function handleClick() {
    setDrop(!drop);
  }

  function handleClick1() {
    setDrop1(!drop1);
  }

  return (
    <div className="cover-song">
      <div className="song">
        <PlayArrowRoundedIcon
          onClick={() => play(data)}
          className="song-icon"
          fontSize="large"
        />
        <img className="song-img" src={img} alt="" />
        <div className="song-info">
          <h4>{name}</h4>
          <span>{artists}</span>
        </div>
        <p className="song-album">{album}</p>
        <p className="song-duration">{(duration / 60).toFixed(2)} m</p>
        <MoreHorizIcon onClick={handleClick} />
      </div>
      <div style={{ display: drop ? "block" : "none" }}>
        <div className="dropDownContent">
          <p onClick={handleClick1}>Add to playlist</p>
          <div style={{ display: drop1 ? "block" : "none" }}>
            {playListData}
          </div>
          <p>Remove from playlist</p>
        </div>
      </div>
    </div>
  );
}
export default Song;
