let fetchApi = url => new Promise((resolve, reject) => {
    fetch(url, {
        method: 'GET',
        headers: {
            "Authorization": "Bearer BQAtMfV6wB_CNKgUd-5WID0KBOuSp92s5wwb0sYSKhF_YSWdDrJnxlXKqiFKS0vKETaZsS-uCadE33kfFg4cIPYQRNakgXcBLkKudb3xyO1DIH8YmEU3L_Qjp7OGWYkxONgjtmv5tk_Hp2LLcP7joPyeITyQPPTIO7Gx_MYhJNbCsZ-rik2EHNp5FljvZU8sIJYnbkCLRylhA6gVJtxEAqBpE-R8KdROxxTkDLTF7X7ICHBVPtl_1ohl3EZN"
        }
    })
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            resolve(data)
        })
})

export default fetchApi;