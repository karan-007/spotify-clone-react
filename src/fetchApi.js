let fetchApi = url => new Promise((resolve, reject) => {
    fetch(url, {
        method: 'GET',
        headers: {
            "Authorization": "Bearer BQC3Edqy8EpDOmOZ6Gd5bpMrMSG-NGlPojEnQhE5uUoxL5B2im3V-6sFp5kCLxLqYnIG_zyrOkJd5VV5f6Afo0_x7vkYvKs82KOb_-NJXve9XAcozqS2xYI06le0P1gMW_lxD8iMJoWY4Qv9F4LlciUgb-Hlhl9znf27M7PpXGDmJI5_9q7oF3-EHZqaxNUbRtziPKyZmz38vnZ6Ewgamg7QfGHpYMlRF0x2Kj-YU8B4Ddf53M4kR5tw5gQ9oQ9Q5A0PY_qxocHI9hZ2_vC80L9UyxDcLSMe"
        }
    })
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            resolve(data)
        })
})

export default fetchApi;