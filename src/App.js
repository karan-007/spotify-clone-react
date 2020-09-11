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



function App() {

  const [token, setToken] = useState()

  // useEffect(() => {
  //   const hash = getTokenFromResponse();
  //   window.location.hash = "";
  //   let _token = hash.access_token;
  //   console.log(_token)
  //   setToken(_token)
  // })

  // const [token, setToken] = useState("BQAtMfV6wB_CNKgUd-5WID0KBOuSp92s5wwb0sYSKhF_YSWdDrJnxlXKqiFKS0vKETaZsS-uCadE33kfFg4cIPYQRNakgXcBLkKudb3xyO1DIH8YmEU3L_Qjp7OGWYkxONgjtmv5tk_Hp2LLcP7joPyeITyQPPTIO7Gx_MYhJNbCsZ-rik2EHNp5FljvZU8sIJYnbkCLRylhA6gVJtxEAqBpE-R8KdROxxTkDLTF7X7ICHBVPtl_1ohl3EZN")

  // useEffect(() => {
  //   fetchApi("https://api.spotify.com/v1/users/{user_id}/playlists")
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err))
  // })

  let login = <div>
    <Login />
  </div>

  let display = <div className="App">
    <div className="upper-body">
      <SideNav />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/library" exact component={Library} />
        <Route path="/playlist/:id" component={PlayList} />
      </Switch>
    </div>
    <Footer />
  </div>

  let data = !token ? <div>
    <Login />
  </div> : <div className="App">
      <div className="upper-body">
        <SideNav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/library" exact component={Library} />
          <Route path="/playlist/:id" component={PlayList} />
        </Switch>
      </div>
      <Footer />
    </div>

  return (
    <Router>
      <div className="App">
        <div className="upper-body">
          <SideNav />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/library" exact component={Library} />
            <Route path="/playlist/:id" component={PlayList} />
            <Route path="/track/:id" component={PlayList} />
            <Route path="/artist/:id" component={PlayList} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
