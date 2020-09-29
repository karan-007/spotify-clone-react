import axios from './apiConfig/API'


let fetchApi = url => new Promise((resolve, reject) => {
    axios(url, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    })
        .then(response => response.data)
        .then(data => {
            resolve(data)
        })
        .catch(err => reject(err))
})

export default fetchApi;