import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../style/createPlaylist.css";
import Playlist from "./PlayList";
import { FullscreenExit } from "@material-ui/icons";
import { postApiWithAuth } from '../postApi'


const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    display: "flex",
    flexDirection: "row",
  },
}));

function CreatePlaylist() {
  const [playlistName, setPlaylistName] = useState("");

  const handleChange = (e) => {
    setPlaylistName(e.target.value);
  };

  const handleClick = async () => {

    try {
      let data = await postApiWithAuth('/playlists/add',{playlistName});
      console.log(data);
      alert(data.msg);
      setPlaylistName('');
    }

    catch(err){
      console.log(err);
      throw err;
    }

    alert("playlist created!");
  }



  const classes = useStyles();
  return (
    <div className="body">
      <div className="create">
        <h1>Create new playlist</h1>

        <form className={classes.root} noValidate autoComplete="off">
          <input
            className="textField"
            type="text"
            value={playlistName}
            onChange={handleChange}
          />
          <h4 onClick={handleClick} className="create-btn">
            Create
          </h4>
        </form>
      </div>
    </div>
  );
}

export default CreatePlaylist;
