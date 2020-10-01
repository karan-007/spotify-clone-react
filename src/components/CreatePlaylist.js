import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { postApiWithAuth } from '../postApi'

class CreatePlayList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            playlistName: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            playlistName: e.target.value
        })
    }

    handleSubmit = () => {
        if(this.state.playlistName !== ''){
            postApiWithAuth("/playlists/add", { playlistName: this.state.playlistName })
            .then((data) => alert(data.msg))
            .then(() => this.props.onHide())
        }

        else{
            alert(`Playlist name can't be empty`)
        }        
    }


    render() {
        return (

            <Modal
                {...this.props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>Add Playlist</Modal.Header>

                <div className='m-auto w-50'>
                    <label><b>Playlist Name:</b></label>
                    <input
                        type='text'
                        onChange={this.handleChange}
                        className="form-control"
                        value={this.state.playlistName}
                        required
                    />
                </div><br />

                <Modal.Footer>
                    <Button onClick={this.props.onHide} variant='secondary'>Close</Button>
                    <Button type='submit' variant='primary' onClick={this.handleSubmit}>Create</Button>
                </Modal.Footer>

            </Modal>
        )
    }
}

export default CreatePlayList;
