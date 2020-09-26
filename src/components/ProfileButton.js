import React, {useState} from "react";
import {Link} from 'react-router-dom'
import "../style/profileButton.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    margin: "30px 30px 5px",
    color:"white",
    backgroundColor:"black",
    borderRadius:"20px",
    borderStyle: "none",
    zIndex:1,
    '&:hover': {
        backgroundColor:"#282828"
      },
  }
}));

function ProfileButton() {

    const [menu,setMenu]=useState(false)

  const classes = useStyles();

  function handleClick(){
    setMenu(!menu)
}

  return (
    <div className="dropdown">
      <Button
      onClick={handleClick}
        variant="contained"
        className={classes.button}
        startIcon={<AccountCircleIcon />}
      >
        User
      </Button>
      <div style={{display:menu?"block":"none"}}>
          <div id="myDropdown" className="dropdown-content">
        <Link to="/profile">Profile</Link>
        <Link>Logout</Link>
        </div>
    </div>
    </div>
  );
}

export default ProfileButton;
