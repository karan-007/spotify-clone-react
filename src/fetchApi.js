import { getTokenFromResponse } from "./spotify";


const hash = getTokenFromResponse();
window.location.hash = "";
let _token = hash.access_token;

let fetchApi = url => new Promise((resolve, reject) => {
    fetch(url, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer BQCMd8BcTJuPW_2IRfC4LLagTIA_Teo_6LE9vELu9a7dBu43X03P4rGUHkD0mZtw-kZ9m3uqTcG8XneZ077Cl22UYKy9IXA691A5DPb5jlXHYAfigbZH3pn093tYcGoJsld07TLzEVfGt4vwcXNBgBsLC68DLd-SIJy91PiYAcmtMrOYIOLiwy6iPFyFYF-19LrmJ711harZG1e5EQRlTMYuYrcLKQDYsXDrOosHpie8g95wC3OSqmIi4ZtXR1_V8K4bcByidP9x4UxoylooLflkmldO5yGG`
        }
    })
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            resolve(data)
        })
})

export default fetchApi;