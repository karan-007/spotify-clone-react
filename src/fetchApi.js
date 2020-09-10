let fetchApi = url => new Promise((resolve, reject) => {
    fetch(url, {
        method: 'GET',
        headers: {
            "Authorization": "Bearer BQCdhMKiGOXZSW1epQQ7NB6IClmQj52EDR5cd5cXpUckdddMv3hJpzJ2GSld1BntG7Qpk3Q-3FGWb7wO75M3R2r-owRi3-ynBQPAXZgUdboRoS7uGNAytbywOT2L_5QPU2bIhxjHv1-Jq8DibEhgp_pOIF8CHaktUaTgdkTd8u0bPFt_cI8aIr8SE12dPZZbZ7oRL7_7l2zo2WUL5nKdADECOIo4LAKxZHCgFIUcnSI1UaFps6QJ5Mwrq5691A6Ddr08yrNymgDOUPlKZn8xsRKiBxQ1pcV7"
        }
    })
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            resolve(data)
        })
})

export default fetchApi;