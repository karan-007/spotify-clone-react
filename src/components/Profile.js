import React from "react";
import Card from "./Card";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "../style/Profile.css";

let playlistData = [
  {
    playlistName: "work out playlist",
  },
  {
    playlistName: "bus ride playlist",
  },
  {
    playlistName: "chill out playlist",
  },
];

function Profile() {
  const style = {
    fontSize: 200,
    paddingTop: "20px",
    paddingLeft: "20px",
    float: "left",
  };

  return (
    <div className="body">
      <div className="cover">
        <AccountCircleIcon style={style} />
        <h5 className="text">Profile</h5>
        <h1 className="text">User</h1>
      </div>
      <div className="user-playlist">
        <h2>Playlists</h2>
        <div className="playlist-card">
          {playlistData.map((item) => (
            <Card name={item.playlistName} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
