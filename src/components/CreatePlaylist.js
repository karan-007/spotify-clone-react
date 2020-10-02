import React from "react";
import { Modal,Button } from "react-bootstrap";
import { postApiWithAuth } from "../postApi";
import "../style/createPlaylist.css";

class CreatePlayList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlistName: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      playlistName: e.target.value,
    });
  };

  handleSubmit = () => {
    if (this.state.playlistName !== "") {
      postApiWithAuth("/playlists/add", {
        playlistName: this.state.playlistName,
      })
        .then((data) => alert(data.msg))
        .then(() => this.props.onHide());
    } else {
      alert(`Playlist name can't be empty`);
    }
  };

  render() {
    return (
      <Modal
        {...this.props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="create">
          <h3>
            <b>Create playlist</b>
          </h3>
          <input
            className="textField"
            type="text"
            onChange={this.handleChange}
            value={this.state.playlistName}
            required
          />
          <div>
            <Button
              className="btn btn1 btn-success"
              type="submit"
              onClick={this.handleSubmit}
            >
              Add
            </Button>
            <Button className="btn btn1 btn-success" onClick={this.props.onHide}>
              Close
            </Button>
          </div>
        </div>
      </Modal>
    );
  }
}

export default CreatePlayList;
