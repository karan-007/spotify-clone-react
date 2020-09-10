let fetchApi = url => new Promise((resolve, reject) => {
    fetch(url, {
        method: 'GET',
        headers: {
            "Authorization": "Bearer BQBoo-6YYZVZmBuyU9hCNVIi6t7TXgLTzZ4WjUlOdxh2N-A9qLQ6qEV48_AVrs_7FUg1NBXcpaw3308eD4GpipRKyZ17tgvqdqnDMEMZl6ramzaeEI8dsUFoOUJHxKmbzPsATJGmfqfIv7iG15b8fXtpZc-sJ1iylnyNem37BD6huP-P9Sq2fS4Apt5dQRZ2GSiPbh6w9O6C0jSSelM_O_5oqEIAG0p7rnjdnnTClNyDtrSBPWh-0oCbP8GS61iAgQztS2XwelndTVZYY0wfd-HW4n30M_iJ"
        }
    })
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            resolve(data)
        })
})

export default fetchApi;