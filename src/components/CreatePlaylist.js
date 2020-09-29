import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../style/createPlaylist.css";
import Playlist from './PlayList'
import { FullscreenExit } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    display:'flex',
    flexDirection:'row'
  },
}));

function CreatePlaylist() {
    function handleClick(){
        alert("playlist created!")
    }
  const classes = useStyles();
  return (
    <div className="body">
        <div className="create">
      <h1>Create new playlist</h1>
      
      <form className={classes.root} noValidate autoComplete="off">
      {/* <TextField className="textField" id="standard-basic" size="normal" /> */}
      
      <input className="textField" type="text"/>
        <h4 onClick={handleClick} className="create-btn">Create</h4>
      </form>
      </div>
      <h4 style={{marginTop:'30px 0'}}>Playlists</h4>
      {/* <Playlist/> */}
    </div>
  );
}

export default CreatePlaylist;
