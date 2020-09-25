import React from "react";
import style from "../style/profileButton.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    position: "absolute",
    top: 0,
    right: 0,
    margin: "30px",
    color:"white",
    backgroundColor:"black",
    borderRadius:"20px",
    borderStyle: "none",
    zIndex:1,
    '&:hover': {
        backgroundColor:"gray"
      }
  }
}));

function ProfileButton() {

  const classes = useStyles();

  function handleClick(){
      console.log("clicked")
  }

  return (
    <div>
      <Button
      onClick={handleClick}
        variant="contained"
        className={classes.button}
        startIcon={<AccountCircleIcon />}
      >
        Profile
      </Button>
    </div>
  );
}

export default ProfileButton;
