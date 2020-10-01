import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavOption from "./NavOption";
import PlayArrowRoundedIcon from "@material-ui/icons/PlayArrowRounded";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import fetchApi from "../fetchApi";
import { postApiWithAuth } from "../postApi";
import axios from '../apiConfig/API'

import "../style/Song.css";

function Song({ img, name, artists, album, duration, data, play }) {
  const [drop, setDrop] = useState(false);
  const [drop1, setDrop1] = useState(false);
  const [drop2, setDrop2] = useState(false);
  const [playlist1, setPlaylist1] = useState("");
  const [playlist2, setPlaylist2] = useState("");
  const [toggle, setToggle] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchApi("/playlists")
      .then((data) => {
        setPlaylist1(data);
        setPlaylist2(data);
        //    console.log(data);
        setToggle(true);
      })
      .catch((err) => {
        //  console.log(err);
        setError(err);
      });
  }, []);

  function addToPlaylist(pid, sid) {
    postApiWithAuth("playlists/add/song", { playlistId: pid, songId: sid })
      .then(alert("added"))
      .catch((err) => console.log(err));
  }

  function removeFromPlaylist(pid, sid) {
    axios
      .delete(`delete/playlist/song/${pid}/${sid}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then(alert("removed"))
      .catch((err) => console.log(err));
  }

  if (toggle) {
    var playListData1 = playlist1.map((list) => {
      return (
        <Link
          onClick={() => addToPlaylist(list.playlist_id, data.song_id)}
          key={list.playlist_id}
          className="link-style"
        >
          <NavOption title={list.playlist_name} />
        </Link>
      );
    });

    var playListData2 = playlist2.map((list) => {
      return (
        <Link
          onClick={() => removeFromPlaylist(list.playlist_id, data.song_id)}
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
  function handleClick2() {
    setDrop2(!drop2);
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
            {playListData1}
          </div>
          <p onClick={handleClick2}>Remove from playlist</p>
          <div style={{ display: drop2 ? "block" : "none" }}>
            {playListData2}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Song;
