import { getTokenFromResponse } from "./spotify";


const hash = getTokenFromResponse();
window.location.hash = "";
let _token = hash.access_token;

let fetchApi = url => new Promise((resolve, reject) => {
    fetch(url, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer BQCdr5w1KMw-911e2imyzPYd3IKbazwj3mIgxk9Imx4zk-x-1Lk0NO6nzPW1dKNo0p5jISV0GnS5TbYtMrHzcUtTO_7qDf1P-SuYo6-SXzmFbf-BpXzFfX_jzu0H5xnpSOauO29rp01RnHMv9HaKLXiD-BLyXNbc35DtjHRrq3OGpgEG-RKhqi4HcyL-mc_J9F7aMs2ndSWbGzCeUw9mNw0CAPgmpzQ3rOjOz5apaiScdLCrk2vEK6eFUS8UFOgYvICowycdlsplSORqJ5NgKB5UypIIUxFK`
        }
    })
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            resolve(data)
        })
})

export default fetchApi;