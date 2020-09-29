import React, { Component } from 'react';
import axios from '../apiConfig/API';
import SimpleReactValidator from 'simple-react-validator';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            date_of_birth: '',
            username: '',
            gender: ''
        }
        this.validator = new SimpleReactValidator();
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (this.validator.allValid()) {
                const response = await axios({
                    method: 'post',
                    url: '/signup',
                    data: this.state
                });

                const confirm = window.confirm(`${response.data.msg}`);
                confirm ? window.location.reload(): null
            }
            else {
                this.validator.showMessages();
                this.forceUpdate();
            }

        }
        catch (err) {
            if (err.response.status === 422) {
                window.alert(err.response.data.msg);
            }
            else {
                console.log(err.response)
            }
        }

    }

    render() {
        return (
            <div className='container w-50 mt-5'>
                <form className='flex' onSubmit={this.handleSubmit}>

                    <div className='form-group image'>
                        <img src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png' 
                        height='60px' 
                        width='200px'
                        alt='spotify logo'
                         />
                    </div>
                    
                    <div className='form-group'>
                        <label><b>What's your name?</b></label>
                        <input
                            type='text'
                            name='name'
                            value={this.state.name}
                            className='form-control'
                            placeholder='Enter your full name'
                            onChange={this.handleChange}
                            onBlur={() => this.validator.showMessageFor('name')}
                        ></input>
                        <span className='color-red'>{this.validator.message('name', this.state.name, 'required')}</span>
                    </div>

                    <div className='form-group'>
                        <label><b>What's your email?</b></label>
                        <input
                            type='text'
                            name='email'
                            value={this.state.email}
                            className='form-control'
                            placeholder='Enter your valid email'
                            onChange={this.handleChange}
                            onBlur={() => this.validator.showMessageFor('email')}
                        ></input>
                        <span className='color-red'>{this.validator.message('email', this.state.email, 'required|email|max:255')}</span>
                    </div>

                    <div className='form-group'>
                        <label><b>What should we call you?</b></label>
                        <input
                            type='text'
                            name='username'
                            value={this.state.username}
                            className='form-control'
                            placeholder='Enter your username'
                            onChange={this.handleChange}
                            onBlur={() => this.validator.showMessageFor('username')}
                        ></input>
                        <span className='color-red'>{this.validator.message('username', this.state.username, 'required|min:6|max:255')}</span>
                    </div>

                    <div className='form-group'>
                        <label><b>Create a password</b></label>
                        <input
                            type='text'
                            name='password'
                            value={this.state.password}
                            className='form-control'
                            placeholder='Enter your password'
                            onChange={this.handleChange}
                            onBlur={() => this.validator.showMessageFor('password')}
                        ></input>
                        <span className='color-red'>{this.validator.message('password', this.state.password, 'required|min:8')}</span>
                    </div>

                    <div className='form-group'>
                        <label><b>What's your date of birth?</b></label>
                        <input
                            type='date'
                            name='date_of_birth'
                            value={this.state.date_of_birth}
                            className='form-control'
                            placeholder='Enter your date of birth'
                            onChange={this.handleChange}
                        ></input>
                    </div>

                    <div className="inline-radio form-group">
                        <label><b>Gender</b></label><br />

                        <label className="radio-inline">
                            <input 
                            type="radio" 
                            name='gender' 
                            onChange={this.handleChange} 
                            value="male" 
                            onBlur={() => this.validator.showMessageFor('gender')} 
                            />&nbsp;Male
                        </label>&nbsp;&nbsp;&nbsp;

                        <label className="radio-inline">
                            <input 
                            type="radio" 
                            name='gender' 
                            onChange={this.handleChange} 
                            value="female" 
                            onBlur={() => this.validator.showMessageFor('gender')} 
                            />&nbsp;Female
                        </label>&nbsp;&nbsp;&nbsp;

                        <label className="radio-inline">
                            <input 
                            type="radio" 
                            name='gender' 
                            onChange={this.handleChange} 
                            value="others" onBlur={() => this.validator.showMessageFor('gender')} 
                            />&nbsp;Others
                        </label>                        
                        <span className='color-red'>{this.validator.message('gender', this.state.gender, 'required')}</span>
                        
                    </div>

                    <Button type='submit' variant='outline-primary' size='md' block>SIGNUP</Button><br />

                    <span><b>Already have an account?</b></span><br />

                    <Link to='login' className='mb-5 text-decoration-none'>
                        <Button type='submit' variant='outline-secondary' size='md' block >LOGIN HERE</Button>
                    </Link>
                </form>
            </div>

        )
    }
}

export default SignUp;
