import React, { useEffect } from 'react';
import './App.css';
import Home from './components/Home'
import fetchApi from './fetchApi'
import SideNav from './components/SideNav'
import Footer from './components/Footer'
import Search from './components/Search'
import Library from './components/Library'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PlayList from './components/PlayList';


function App() {
  // const [token, setToken] = useState("BQAtMfV6wB_CNKgUd-5WID0KBOuSp92s5wwb0sYSKhF_YSWdDrJnxlXKqiFKS0vKETaZsS-uCadE33kfFg4cIPYQRNakgXcBLkKudb3xyO1DIH8YmEU3L_Qjp7OGWYkxONgjtmv5tk_Hp2LLcP7joPyeITyQPPTIO7Gx_MYhJNbCsZ-rik2EHNp5FljvZU8sIJYnbkCLRylhA6gVJtxEAqBpE-R8KdROxxTkDLTF7X7ICHBVPtl_1ohl3EZN")

  // useEffect(() => {
  //   fetchApi("https://api.spotify.com/v1/users/{user_id}/playlists")
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err))
  // })
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
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
