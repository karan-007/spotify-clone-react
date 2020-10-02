import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { songData, saveAudio, play, pause } from "../store/index";
import "../style/PlayList.css";
import fetchApi from "../fetchApi";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Song from "./Song";

function PlayList({ match }) {
  const [playlist, setPlaylist] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [like, setLike] = useState(false);
  const [shouldReload, setShouldReload] = useState(false)

  function handleClick() {
    setLike(!like);
  }

  const playing = useSelector((state) => state.player.playing);
  const audio = useSelector((state) => state.player.playingAudio);

  const dispatch = useDispatch();

  let playListData = "Loading...";
  let songs = "Loading...";
  const mounted = useRef();
  let id = match.params.id;

  useEffect(() => {
    if (!mounted.current) {
      fetchData(id);
      mounted.current = true;
    } else {
      fetchData(id);
    }
  }, [id, shouldReload]);


  async function fetchData(id) {
    let data;
    if (id === "likedSongs") {
      data = await fetchApi(`/liked`);
    } else {
      data = await fetchApi(`/playlists/${id}`);
    }
    setPlaylist(data);
    setToggle(true);
  }

  const isReload = () => {
    setShouldReload(true)
  }

  const playSong = (data) => {
    console.log(data);
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
    playListData = (
      <div className="body-info">
        <img src={playlist.img_url} alt="" />
        <div className="body-infoText">
          <strong>{id !== 'likedSongs' ? 'playlist' : 'Liked Songs'}</strong>
        </div>
      </div>
    );
    songs = playlist.map((song) => {
      return (
        <Song
          key={song.song_id}
          img={song.img_url}
          name={song.song_name}
          artists={song.artist_name}
          // album={song.track.album.name}
          duration={song.duration}
          isReload={isReload}
          data={song}
          play={playSong}
        />
      );
    });
  }
  return (
    <div className="playlist">
      {playListData}
      <div className="body-songs">
        <div className="body-icons">
          <PlayCircleFilledIcon className="body-shuffle" />
          <div
            onClick={handleClick}
            style={{
              color: like ? "red" : "inherit",
            }}
          >
            <FavoriteIcon fontSize="large" className="fav-btn" />
          </div>
        </div>
      </div>
      {songs}
    </div>
  );
}

export default PlayList;
