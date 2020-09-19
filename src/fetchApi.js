// import { getTokenFromResponse } from "./spotify";


// const hash = getTokenFromResponse();

// let _token = hash.access_token;
// console.log(_token)

let fetchApi = url => new Promise((resolve, reject) => {
    fetch(url, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer BQBa-svRq5fPQh_2IvSUu7d9VZER7QI55vRZ-8UTx8hTiySCwyQq9jpr0HvLulww-BmZXToY9TVNvRgGHw_RTwye5whMzxAxnn4hBK1SsSt4P_IjA9WZHviRvgEYCsky0vyUJ7WIHtP2uYlptDen5XHwX388jZzMIoLxxErerM6sGSpyZxRniqvdt5wRhNGc6oaF7hqwRu8VonDElFmignrZ0g6J1whpqhVObqRO2tHWFKoJ4xVQCHE4IB3aN0KENDv4HcsVggwHObArTx8_me7RL02CpHx-`
        }
    })
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            resolve(data)
        })
        .catch(err => reject(err))
})

export default fetchApi;