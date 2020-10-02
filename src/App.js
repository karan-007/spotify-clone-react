import React, { useState } from 'react';
import './style/App.css';
import Home from './components/Home'
import ProfileButton from './components/ProfileButton'
import Profile from './components/Profile'
import SideNav from './components/SideNav'
import Footer from './components/Footer'
import Search from './components/Search'
import Library from './components/Library'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PlayList from './components/PlayList';
import LandingPage from './components/LandingPage'
import AlbumAndTrack from './components/AlbumAndTrack';
import { Provider } from 'react-redux'
import Login from './components/Login'
import store from './store/store'
import SignUp from './components/SignUp';

function App() {

  const token = localStorage.getItem('token');

  const [isLoggedIn, setLoggedIn] = useState(token? true : false);

  const handleLoggedIn = () => {    
    setLoggedIn(!isLoggedIn)
  }

  let data = "loading"

  if (!isLoggedIn) {
    data = <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'><LandingPage /> </Route>
          <Route exact path='/login' component={(props) => <Login  handleLoggedIn={handleLoggedIn} {...props} />}>
          </Route>
          <Route exact path='/signup' component={SignUp} />
        </Switch>
      </Router>
    </div>
  } else {
    data = <Provider store={store}>
      <Router>
        <div className="App">
          <ProfileButton handleLoggedIn={handleLoggedIn} />
          <div className="upper-body">
            <SideNav />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path="/profile">
              <Profile handleLoggedIn={handleLoggedIn}/>
              </Route>
              <Route path="/search" component={Search} />
              <Route path="/library" exact component={Library} />
              <Route path="/playlist/:id/:name" component={PlayList} />
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
