// import { getTokenFromResponse } from "./spotify";


// const hash = getTokenFromResponse();

// let _token = hash.access_token;
// console.log(_token)

let fetchApi = url => new Promise((resolve, reject) => {
    fetch(url, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer BQCxqF_H5qKt0TLv4rao6zS1sDuyHL5sGuRsYy86uv-jjznkPwaivmYaZuiB-AWE43aRY1IrXVo57wFUm8QMNal9THRu_pvKuwUOVz3FUYYwLPbTEWRBxuA-t_FHCwjZxG5Hztaro4RA9Al50vCKpRbuFaYVfhSwWj2Ul6UCc-BQDKCn0CCkca4XBxj_1XTObnCdLVmpgbAduqh3p3hQiP3BfzmR9dFbwsw8AZ__X50O3bCvVpGCmcGP5T7uYhXCb32eLFSsSLoUWv6RNPW85xkOMe2fmS-a`
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