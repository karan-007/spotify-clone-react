let fetchApi = url => new Promise((resolve, reject) => {
    fetch(url, {
        method: 'GET',
        headers: {
            "Authorization": "Bearer BQC4d5_ST18J6UshYYrXb5z2FEGQFag0nVKopiehkJ1nDrJNwBxtzDcTgDOhZo2KDAi37s4RxGwOp5qunIgNwAxUwfZGRypmoFmk0BCXNNgDFx_CI_mhnOE7tnVMuX5s2pC3AfsEIW0RblTyASquoNg1Pvh9eLKyyUFz61Klbwe5-Bp_nQvFMer-hUixFUu1lpUoBHmfk45dio3l_-7AdOE3R0Y93NEumuzdeEHD7wF5b7KW3x-6e119OiUMO6UdsRm8y6PHDt5fkHMVjPNxsrd7XvOXgOhx"
        }
    })
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            resolve(data)
        })
})

export default fetchApi;