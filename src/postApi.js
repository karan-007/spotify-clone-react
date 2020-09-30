import axios from './apiConfig/API'


export const postApi = (url,data) => new Promise((resolve, reject) => {
    axios(url, {
        method: 'POST',
        data:data
    })
        .then(response => response.data)
        .then(data => {
            resolve(data)
        })
        .catch(err => reject(err))
})

export const postApiWithAuth = (url,data) => new Promise((resolve, reject) => {
    axios(url, {
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
        data:data
    })
        .then(response => response.data)
        .then(data => {
            resolve(data)
        })
        .catch(err => reject(err))
})
