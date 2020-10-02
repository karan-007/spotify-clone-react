import React, { useState, useEffect } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
// import CameraAltIcon from "@material-ui/icons/CameraAlt";
import "../style/Profile.css";
import { postApiWithAuth } from "../postApi";
import fetchApi from "../fetchApi";
import { Button } from "react-bootstrap";
import axios from "../apiConfig/API";
import { withRouter } from "react-router-dom";

const style = {
  fontSize: 200,
  float: "left",
};

function Profile({ history, handleLoggedIn }) {
  const [imageData, setImageData] = useState();
  const [userData, setUserData] = useState("");
  const [fetchedData, setFetchedData] = useState(false);
  const [imageUpload, setImageUpload] = useState(false);

  const handleChange = (e) => {
    setImageData(e.target.files[0]);
  };

  useEffect(() => {
    fetchApi("/user/profile")
      .then((data) => {
        setUserData(data);
        setFetchedData(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [imageUpload]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("profileImage", imageData, imageData.name);
    if (imageData) {
      postApiWithAuth("/userimage/upload", data)
        .then((res) => {
          window.alert("profile pic added successfully");
          setImageUpload(true);
        })
        .catch((err) => console.log(err));
    }
  };

  function goto(link) {
    history.push(link);
  }

  function handleDelete() {
    const confirm = window.confirm("are you sure?");
    if (confirm) {
      axios
        .delete("delete/user", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then(alert("user deleted"))
        .then(() => {
          localStorage.clear();
          goto("/");
          handleLoggedIn();
        })
        .catch((err) => console.log(err));
    }
  }

  const imagedata =
    fetchedData && userData && userData[0].img_url !== null ? (
      <img className="pro-pic" src={userData[0].img_url} alt="user profile" />
    ) : (
      <AccountCircleIcon style={style} />
    );

  const renderCover = fetchedData ? (
    <div className="cover">
      {imagedata}

      <form onSubmit={handleSubmit} className="upload-button">
        <input
          type="file"
          id="file"
          accept="image/*"
          className="text-light"
          onChange={handleChange}
        />
        <Button type="submit" className="btn btn-secondary">
          Upload image
        </Button>
      </form>
    </div>
  ) : (
    "fetching data"
  );

  const renderUserData = fetchedData ? (
    <div className="user-playlist">
      <h2>User Details</h2>
      <span>Name:</span> <p>{userData[0].name}</p>
      <span>Username:</span> <p>{userData[0].username}</p>
      <span>E-mail:</span> <p>{userData[0].email}</p>
      <Button className="btn btn-danger"onClick={handleDelete}>Delete user</Button>
    </div>
  ) : null;

  return (
    <div className="body">      
      {renderCover}
      {renderUserData}
    </div>
  );
}

export default withRouter(Profile);
