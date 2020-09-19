// import { getTokenFromResponse } from "./spotify";


// const hash = getTokenFromResponse();

// let _token = hash.access_token;
// console.log(_token)

let fetchApi = url => new Promise((resolve, reject) => {
    fetch(url, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer BQDgylH9GULeepFqRgMVDG2AE4cYCcPbOR2pkSFVUE8H_tcsKPmUd4NeFBkk1dFzdOsHItadahp8uI-FgR1tzSjJ4v1fimWrCKF24LVJmvP4v_XPjrL1QWJPCalGaJ46FFH4vVs5kjlj0Hb3mkiYM0v-n4T4uuHWZ33AAYYmPflcboorUZO08Q_Srz9g0UYkJ6g_tVtIKVut5yZKy5BcR78PvYe4M5ZVdAKeQrrNwsqZH70Kz1Pljz-lPZGRzJIe33xm7eUliVFtfQUw8s6JTij8ml324yTh`
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