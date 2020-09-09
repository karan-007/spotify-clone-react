let fetchApi = url => new Promise((resolve, reject) => {
    fetch(url, {
        method: 'GET',
        headers: {
            "Authorization": "Bearer BQBhxHsPu-SmT7hf3KJWUKq2pfZAS8qlLeQZt475CNkVcqAinQcrWUZi--oewo90G5eoACGRbBc1tmz4CQ-HQPNX3mmf4n5zg8PwGgGx2bnoIlScxp18UHjitHMp5Aczs_82WWcmTdT96YvIs_t5r0W0Zgz_M5QnsttOG1EXajj1Epls6Kp4QiN-UvsP2qAbygJb68_rKSzyqi4uBeaHmuWezGVflmL-7Mj-k9zjtgz0JxY0lY34I83Nyh4Hb1jhcS_WLNJUuRpmT_7IcNLhc5T3ULGCQ-Qf"
        }
    })
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            resolve(data)
        })
})

export default fetchApi;