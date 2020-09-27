import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "../style/createPlaylist.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    }
  },
}));

function CreatePlaylist() {
    function handleClick(){
        alert("playlist created")
    }
  const classes = useStyles();
  return (
    <div className="body">
      <h1>Create new playlist</h1>
      <form className={classes.root} noValidate autoComplete="off">
      {/* <TextField className="textField" id="standard-basic" size="normal" /> */}
      <input className="textField" type="text"/>
        <h3 onClick={handleClick} className="btn">Create</h3>
      </form>
    </div>
  );
}

export default CreatePlaylist;
