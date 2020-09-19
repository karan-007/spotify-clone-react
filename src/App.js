import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home'
import fetchApi from './fetchApi'
import SideNav from './components/SideNav'
import Footer from './components/Footer'
import Search from './components/Search'
import Library from './components/Library'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PlayList from './components/PlayList';
import Login from './components/Login'
import { getTokenFromResponse } from "./spotify";
import AlbumAndTrack from './components/AlbumAndTrack';
import { Provider } from 'react-redux'
import store from './store/store'


function App() {

  // const [token, setToken] = useState(false)

  // // console.log(window.location.href.split('/')[2])
  // useEffect(() => {
  //   const hash = getTokenFromResponse();
  //   let _token = hash.access_token;
  //   window.location.hash = "";

  //   if (_token) {
  //     setToken(true)
  //   }
  // }, []);
  // let data = "loading"
  // if (!token) {
  //   data = <div className="App">
  //     <Login />
  //   </div>
  // } else {
  //   data = <Provider store={store}>
  //     <Router>
  //       <div className="App">
  //         <div className="upper-body">
  //           <SideNav />
  //           <Switch>
  //             <Route path='/' exact component={Home} />
  //             <Route path="/search" component={Search} />
  //             <Route path="/library" exact component={Library} />
  //             <Route path="/playlist/:id" component={PlayList} />
  //             <Route path="/track/:id" component={AlbumAndTrack} />
  //             <Route path="/artist/:id" component={AlbumAndTrack} />
  //             <Route path="/album/:id" component={AlbumAndTrack} />
  //           </Switch>
  //         </div>
  //         <Footer />
  //       </div>
  //     </Router>
  //   </Provider>
  // }

  return (

    <Provider store={store}>
      <Router>
        <div className="App">
          <div className="upper-body">
            <SideNav />
            <Switch>
              <Route path='/' exact component={Home} />
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


  );
}


export default App;
