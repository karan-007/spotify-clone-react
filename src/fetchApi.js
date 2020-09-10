let fetchApi = url => new Promise((resolve, reject) => {
    fetch(url, {
        method: 'GET',
        headers: {
            "Authorization": "Bearer BQDMEsf-KDJw5p0-FzHd8a1itMdIn_5azaB2RmoiZg_8MRFChCj8LaeY2tzip9dbVQEu3VOWwODiSxE7qQdAmFLJ7Rt-y01iiLjU1JVA60bLd7fBUmvvnlTWscAJ4mFZUKuWf3Pm5HVgx6yoP5Q_Us7CVyfG4lLtnfbaRXPEQj-z0a4zquhLTn-MjXSRgBiZLzYN5b1Wb4Kmf36QTPKforDtg_nhWo1sdPfO7pxUuTf99LFTec9GLqOGz4DhiD_lqjCBym0uKTzGS6vQunGgzyPcCUB8z_Lv"
        }
    })
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            resolve(data)
        })
})

export default fetchApi;