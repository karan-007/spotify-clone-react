import React, { useState, useEffect } from 'react';
import './style/App.css';
import Home from './components/Home'
import ProfileButton from './components/ProfileButton'
import fetchApi from './fetchApi'
import Profile from './components/Profile'
import SideNav from './components/SideNav'
import Footer from './components/Footer'
import Search from './components/Search'
import Library from './components/Library'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PlayList from './components/PlayList';
import LandingPage from './components/LandingPage'
import { getTokenFromResponse } from "./spotify";
import AlbumAndTrack from './components/AlbumAndTrack';
import { Provider } from 'react-redux'
import Login from './components/Login'
import store from './store/store'
import SignUp from './components/SignUp';

function App() {

  const [token, setToken] = useState(false)


  // console.log(window.location.href.split('/')[2])
  useEffect(() => {
    const hash = getTokenFromResponse();
    let _token = hash.access_token;
    window.location.hash = "";

    if (_token) {
      setToken(true)
    }
  }, []);
  let data = "loading"
  if (!token) {
    data = <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'><LandingPage /> </Route>
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />
        </Switch>
      </Router>
    </div>
  } else {
    data = <Provider store={store}>
      <Router>
        <div className="App">
          <ProfileButton />
          <div className="upper-body">
            <SideNav />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path="/profile" component={Profile} />
              <Route path="/search" component={Search} />
              <Route path="/library" exact component={Library} />
              <Route path="/playlist/:id" component={PlayList} />
              <Route path="/track/:id" component={AlbumAndTrack} />
              <Route path="/artist/:id" component={AlbumAndTrack} />
              <Route path="/album/:id" component={AlbumAndTrack} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </Provider>
  }

  return (

    <div>
      {data}
    </div>


  );
}


export default App;
