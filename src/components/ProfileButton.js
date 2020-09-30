import React, { useState } from "react";
import { Link, withRouter } from 'react-router-dom'
import "../style/profileButton.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  button: {
    position: 'absolute',
    top: 0,
    right: 0,
    margin: theme.spacing(1),
    margin: "30px 30px 5px",
    color: "white",
    backgroundColor: "black",
    borderRadius: "20px",
    borderStyle: "none",
    zIndex: 1,
    '&:hover': {
      backgroundColor: "#282828"
    },
  }
}));

function ProfileButton({ handleLoggedIn, history }) {

  const [menu, setMenu] = useState(false)

  const classes = useStyles();

  function handleClick() {
    setMenu(!menu)
  }

  function goto(link) {
    history.push(link)
  }


  const logout = () => {
    localStorage.clear();
    goto('/')
    handleLoggedIn();
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
      <div style={{ display: menu ? "block" : "none" }}>
        <div id="myDropdown" className="dropdown-content">
          <Link to="/profile">Profile</Link>
          <Link onClick={logout}>Logout</Link>
        </div>
      </div>
    </div>
  );
}

export default withRouter(ProfileButton);
