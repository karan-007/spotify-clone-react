import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { songData, saveAudio, play, pause } from "../store/index";
import "../style/PlayList.css";
import fetchApi from "../fetchApi";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Song from "./Song";
import axios from "../apiConfig/API";

function PlayList({ match }) {
  const [playlist, setplaylist] = useState([]);
  const [list, setList] = useState({});
  const [toggle, setToggle] = useState(false);

  const playing = useSelector((state) => state.player.playing);
  const audio = useSelector((state) => state.player.playingAudio);

  const dispatch = useDispatch();

  let type = match.path.split("/")[1];
  let playListData = "Loading...";
  let songs = "Loading...";
  const mounted = useRef();
  let id = match.params.id;
  useEffect(() => {
    if (!mounted.current) {
      fetchData(id, type);
      mounted.current = true;
    } else {
      fetchData(id, type);
    }
  }, [id, type]);


  async function fetchData(id, type) {
    if (type === "artist") {
      let data = await fetchApi(`/artists/${id}`);
      setList(data);
      console.log(data);
      setToggle(true);
    }
    if (type === "album") {
      let data = await fetchApi(`/albums/${id}`);
      setList(data);
      setToggle(true);
    }
  }

  const playSong = (data) => {
    if (playing) {
      audio.pause();
      dispatch(pause());
      dispatch(songData(data));
      let songAudio = data.audio_url;
      songAudio = new Audio(songAudio);
      songAudio.play();
      dispatch(saveAudio(songAudio));
      dispatch(play());
    } else {
      dispatch(songData(data));
      let songAudio = data.audio_url;
      let playSong = new Audio(songAudio);
      playSong.play();
      dispatch(saveAudio(playSong));
      dispatch(play());
    }
  };

  if (toggle) {
    if (type === "artist") {
      playListData = (
        <div className="body-info">
          <img src={list[0].img_url} alt="" />
          <div className="body-infoText">
            <strong>Artist</strong>
            <h2>{list[0].artist_name}</h2>
          </div>
        </div>
      );
      songs = list.map((song) => {
        return (
          <Song
            key={song.song_id}
            img={song.img_url}
            name={song.song_name}
            artists={song.artist_name}
            // album={song.album.name}
            duration={song.duration}
            data={song}
            play={playSong}
          />
        );
      });
    }
     else {
      playListData = (
        <div className="body-info">
          <img src={match.params.img} alt="" />
          <div className="body-infoText">
            <strong>Album</strong>
            <h2>{list.name}</h2>
            <p>{list.label}</p>
          </div>
        </div>
      );
      songs = list.map((song) => {
        return (
          <Song
            key={song.song_id}
            img={song.img_url}
            name={song.song_name}
            artists={song.artist_name}
            album={list.name}
            duration={song.duration}
            data={song}
            play={playSong}
          />
        );
      });
    }
  }
  return (
    <div className="playlist">
      {playListData}
      <div className="body-songs">
        <div className="body-icons">
          <PlayCircleFilledIcon className="body-shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
      </div>
      {songs}
    </div>
  );
}

export default PlayList;
