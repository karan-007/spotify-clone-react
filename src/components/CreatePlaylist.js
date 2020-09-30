import React ,{useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../style/createPlaylist.css";
import Playlist from './PlayList'
import { FullscreenExit } from "@material-ui/icons";
import axios from '../apiConfig/API'

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    display: 'flex',
    flexDirection: 'row'
  },
}));


function CreatePlaylist() {

  const [playlistName, setPlaylistName] = useState('')

  const handleChange = (e) => {
    setPlaylistName(e.target.value)
  }

  const handleClick = () => {
    axios({
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      },
      url: '/playlists/add',
      data: {playlistName}
    })
    .then(data => console.log(data))

    alert("playlist created!")
  }



  const classes = useStyles();
  return (
    <div className="body">
      <div className="create">
        <h1>Create new playlist</h1>

        <form className={classes.root} noValidate autoComplete="off">

          <input className="textField" type="text" value={playlistName} onChange={handleChange} />
          <h4 onClick={handleClick} className="create-btn">Create</h4>
        </form>
      </div>
    </div>
  );
}

export default CreatePlaylist;
