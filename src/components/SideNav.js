import React, { useState, useEffect } from "react";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import AddBoxIcon from "@material-ui/icons/AddBox";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import "../style/sideNav.css";
import NavOption from "./NavOption";
import { Link } from "react-router-dom";
import fetchApi from "../fetchApi";
import { Button, Modal } from "react-bootstrap";
import axios from "../apiConfig/API";

function SideNav() {
  const [playlist, setPlaylist] = useState();
  const [toggle, setToggle] = useState(false);
  const [error, setError] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [playlistName, setPlaylistName] = useState("");

  useEffect(() => {
    fetchApi("/playlists")
      .then((data) => {
        setPlaylist(data);
        setToggle(true);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
  }, []);

  let playListData = "loading";
  let errorData = "";

  if (error) {
    errorData = "error";
  }

  if (toggle) {
    playListData = playlist.map((list) => {
      return (
        <Link to={`/playlist/${list.id}`} key={list.id} className="link-style">
          <NavOption title={list.playlist_name} />
        </Link>
      );
    });
  }

  function handleClick() {
    axios({
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      url: "/playlists/add",
      data: { playlistName },
    })
      .then((data) => console.log(data))
      .then(() => setModalShow(false));

    alert("platlist created!");
  }

  function handleChange(){
}

    if (toggle) {
        playListData = playlist.map((list) => {
            return <Link to={`/playlist/${list.playlist_id}`} key={list.playlist_id} className="link-style"><NavOption title={list.playlist_name} /></Link>
        })
    }

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="md"
        className="modalTop"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        closebutton
      >
        <Modal.Header className="modalContainer">
          <Modal.Title className="myModal" id="contained-modal-title-vcenter">
            Create Playlist
            <input
              type="text"
              className="form-control textField1"
              value={playlist}
              onBlur={handleChange}
            />
            <h4 onClick={handleClick} className="create-btn">
              Create
            </h4>
          </Modal.Title>
        </Modal.Header>
      </Modal>
    );
  }

  return (
    <div className="sideNav">
      <Link to="/">
        <img
          className="sideNav-logo"
          src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
          alt=""
        />
      </Link>
      <Link className="link-style" to="/">
        <NavOption Icon={HomeIcon} title="Home" />
      </Link>
      <Link className="link-style" to="/search">
        <NavOption Icon={SearchIcon} title="Search" />
      </Link>
      <Link className="link-style" to="/library">
        <NavOption Icon={LibraryMusicIcon} title="Your Library" />
      </Link>
      <br />
      <br />
      <strong className="sideNav-title">PLAYLISTS</strong>
      <Link className="link-style" onClick={() => setModalShow(true)}>
        <NavOption Icon={AddBoxIcon} title="Create Playlist" />
      </Link>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <Link className="link-style" to="/playlist/likedSongs">
        <NavOption Icon={FavoriteBorderIcon} title="Liked Songs" />
      </Link>
      <hr />
      {playListData}
    </div>
  );
}

export default SideNav;
