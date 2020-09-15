import { getTokenFromResponse } from "./spotify";


const hash = getTokenFromResponse();

let _token = hash.access_token;
// console.log(_token)

let fetchApi = url => new Promise((resolve, reject) => {
    fetch(url, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${_token}`
        }
    })
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            resolve(data)
        })
})

export default fetchApi;