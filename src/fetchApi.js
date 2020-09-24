import { getTokenFromResponse } from "./spotify";


const hash = getTokenFromResponse();

let _token = hash.access_token;


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
        .catch(err => reject(err))
})

export default fetchApi;