import React, { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import "../style/Footer.css";
import fetchApi from '../fetchApi'
import {postApiWithAuth} from '../postApi'
import { play, pause } from "../store/index";
import axios from '../apiConfig/API'

function Footer() {
  const [like, setLike] = useState(false);
  const [data,setUserData]=useState('')

  useEffect(() => {
    fetchApi('/user/profile')
      .then((data) => {
        setUserData(data);
      })
      .catch(err => {
        console.log(err)
      })
  }, [])


  const dispatch = useDispatch();

  let toggle = false;
  let item = useSelector((state) => state.player.songData);
  if (Object.keys(item).length !== 0) {
    toggle = true;
  }

  const playing = useSelector((state) => state.player.playing);
  const audio = useSelector((state) => state.player.playingAudio);

  function handleClick() {
    setLike(!like);
    if(like){
      axios.delete(`/liked/${item.song_id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
    }else{
      postApiWithAuth('/liked/add',{songId:item.song_id}).then(alert("liked")).catch(err=>console.log(err))
    }
  }


  const playSong = () => {
    if (!playing) {
      audio.play();
      dispatch(play());
    }
  };
  const pauseSong = () => {
    if (playing) {
      audio.pause();
      dispatch(pause());
    }
  };

  return (
    <div className="footer">
      <div className="footer__left">
        {toggle ? (
          <img
            className="footer__albumLogo"
            src={item.img_url}
            alt={item.name}
          />
        ) : null}

        {toggle ? (
            <div className="footer_align">
          <div className="footer__songInfo">
            <h4>{item.song_name}</h4>
        <p>{item.artist_name}</p>
          </div>
          <div
          onClick={handleClick}
          style={{
            color: like ? "red" : "inherit",
          }}
        >
          <FavoriteIcon fontSize="default" className="like-btn" />
        </div>
          </div>
        ) : (
          <div className="footer__songInfo">
            <h4>No song is playing</h4>
            <p>...</p>
          </div>
        )}
      </div>

    

      <div className="footer__center">
        {/* <PlayCircleOutlineIcon
          fontSize="large"
          className="footer__icon"
          onClick={playSong}
        />
        <PauseCircleOutlineIcon
          fontSize="large"
          className="footer__icon"
          onClick={pauseSong}
        /> */}

    <audio 
        controls
        src={item.audio_url} />

      </div>
      <div className="footer__right"></div>
    </div>
  );
}

export default Footer;
