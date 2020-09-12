import { getTokenFromResponse } from "./spotify";


const hash = getTokenFromResponse();
window.location.hash = "";
let _token = hash.access_token;

let fetchApi = url => new Promise((resolve, reject) => {
    fetch(url, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer BQBqd6LQmn_YUpbOgQDqKjMK2ERyG357S6CV-dFPUYpZ07vCyU6OKXVi7SZQdmHqLGGGOuUFpyB4hC2y84vkburTyZjZj-gldC8JVq0ZiKLrOFl6eUpiNy9-Y-flu1SfNt6wQ-Epc3akrWXHXPuKf2tX7XJ8LeW5XOhuhqsA_Ajefu3D60JOlM6sKdWAOwU02y4ANqicvA-_nUM5um-0V87LV3zP6cjAgJRGBSkms1GyamG_PJHb-VH_RkKrD7ZLlz3qcyytQxxv-dJcdyZurlxfMzJd-z8a`
        }
    })
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            resolve(data)
        })
})

export default fetchApi;