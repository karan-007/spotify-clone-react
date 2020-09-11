import { getTokenFromResponse } from "./spotify";


const hash = getTokenFromResponse();
window.location.hash = "";
let _token = hash.access_token;

let fetchApi = url => new Promise((resolve, reject) => {
    fetch(url, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer BQAAgzShnzVktrQGWUHoNzjSdAxXuqB0NMGsWOZQFvCecqDtle_2tl6gPoaeBP9Wjt6dAuofgb5r3xKxgzs3K5fOMVHfsWCKJgiRO6bhnHLLSJUqNh85yej1K3_zvch3ajvwWEOeJwAjdBMmcrC9OHQiV772Iqi_dpd7evgbDKCWzc3UrA0bQLRBEIuWA6hd53_VxHpdpXSpOdVo0nO0Hs9t9cdBREZewOmmYA1wBZXCZLXVf3Pc61IGAgpep9Knfo4cDaoG98CJScjYCo2iMdSIDoclujMS`
        }
    })
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            resolve(data)
        })
})

export default fetchApi;