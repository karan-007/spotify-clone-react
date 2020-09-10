let fetchApi = url => new Promise((resolve, reject) => {
    fetch(url, {
        method: 'GET',
        headers: {
            "Authorization": "Bearer BQDv5nAkPGp5exROwmctm6gDbZHzro0NdVnup5KgoFRS3Xfb4qpDzVCcZ34FXZJZ15ax9wM7tESvAk7xWIFu18sh3art_b6pDYinEQOQiW2l2RBW7K_2f0F7Q2MtgyjJrRsi8ThPq4rMeudumPnLTAzeY2MJGrNxVZhovs8jPOfJm9BCNucf1mDRvTJH79XIWjpIBMuldnswaNLJN_F5RUVIakezskCC_RSRN6q6ZDZWFp6TmkxpV7bYxQF6usNTCWSji15Z0V2qRUtirTUxLINMe4TN4JB8"
        }
    })
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            resolve(data)
        })
})

export default fetchApi;