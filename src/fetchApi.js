// import { getTokenFromResponse } from "./spotify";


// const hash = getTokenFromResponse();

// let _token = hash.access_token;
// console.log(_token)

let fetchApi = url => new Promise((resolve, reject) => {
    fetch(url, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer BQBeTy-qPMR_MQViT7G7Etp5n50O3y5Xwg1xgOUS1x9lQdfv1L_THKPfl7XjhBoN4SXc4EsclDU_5kBecivnxFdaxzq1AP189D42Wvm5MqKk4Bz9p-zYEQBFKnlEESwOBIEaMVXWwW7FyBU1jtR1d_SG0rqSzCBzj34hrTDTiJ_-O7uSR2bXIvgRJ6iKDFVkeP-a7HUcJLAkceYmRQVcZYUezdkfE_nlqsmYQn6Emh9DKTbF9WXna4_PSvUr27GfwCbzOy17cKZQnBsoOK-DDAQeLJWDNXeW`
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