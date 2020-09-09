import React, { useEffect } from 'react';
import './App.css';
import Body from './components/Body'
import fetchApi from './fetchApi'
import SideNav from './components/SideNav'
import Footer from './components/Footer'


function App() {
  // const [token, setToken] = useState("BQAtMfV6wB_CNKgUd-5WID0KBOuSp92s5wwb0sYSKhF_YSWdDrJnxlXKqiFKS0vKETaZsS-uCadE33kfFg4cIPYQRNakgXcBLkKudb3xyO1DIH8YmEU3L_Qjp7OGWYkxONgjtmv5tk_Hp2LLcP7joPyeITyQPPTIO7Gx_MYhJNbCsZ-rik2EHNp5FljvZU8sIJYnbkCLRylhA6gVJtxEAqBpE-R8KdROxxTkDLTF7X7ICHBVPtl_1ohl3EZN")

  useEffect(() => {
    fetchApi("https://api.spotify.com/v1/search?q=prateek&type=track%2Cartist")
      .then(res => console.log(res))
      .catch(err => console.log(err))
  })
  return (
    <div className="App">
      <div className="upper-body">
        <SideNav />
        <Body />
      </div>
      <Footer />
    </div>
  );
}


export default App;
