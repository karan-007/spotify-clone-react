import React from 'react';
import axios from '../apiConfig/API';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
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

        try{
            if (this.validator.allValid()) {
                const response = await axios({
                    method: 'post',
                    url: '/login',
                    data: this.state
                })

                response = await response.data;
                localStorage.setItem('token', response.token)

            }             
            else {
                this.validator.showMessages();
                this.forceUpdate();
            }
            
        }

        catch(err){
            window.alert(err.response.data.msg);
            console.log(err)
        }
        
    }

    render() {
        return (
            <div className='container w-50 mt-5 flex'>

                <div className='form-group image'>
                    <img 
                    src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png' 
                    height='60px' 
                    width='200px' 
                    alt='spotify logo'
                    />
                </div>
                <form className='mt-5' onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label><b>Email Address</b></label>
                        <input type='email' 
                        className='form-control' 
                        onBlur={() => this.validator.showMessageFor('email')} 
                        placeholder='Enter Your Email' 
                        onChange={this.handleChange} 
                        name='email' />
                        <span className='color-red'>{this.validator.message('email', this.state.email, 'required|email')}</span>
                    </div>

                    <div className='form-group'>
                        <label><b>Password</b></label>
                        <input type='password' 
                        className='form-control' 
                        placeholder='Enter Your Password' 
                        onChange={this.handleChange} 
                        name='password' 
                        onBlur={() => this.validator.showMessageFor('password')} />
                        <span className='color-red'>{this.validator.message('password', this.state.password, 'required|min:8')}</span>
                    </div>

                    <Button type='submit' variant='outline-primary' size='md' block>LOGIN</Button><br />
                    <hr /> <br />

                    <span><b>Don't have an account?</b></span><br /><br />

                    <Link to='signup' className='text-decoration-none' >
                        <Button type='submit' variant='outline-secondary' size='md' block >SIGNUP HERE</Button>
                    </Link>

                </form>
            </div>

        )
    }
}

export default Login;