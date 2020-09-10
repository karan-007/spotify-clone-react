let fetchApi = url => new Promise((resolve, reject) => {
    fetch(url, {
        method: 'GET',
        headers: {
            "Authorization": "Bearer BQAQLjz8HMhznxX-biaLAqN2IWAiVmZoAAkzKi7TS0-BLF1lUqYBcqGblxzobazjOmktE9dlWUDNtdh4jMAAuAbZ-Ex-QQZfGtWoXajlRKnS8rOqLf_avSUSRD2A3rN11WtOd1fsbtSk7uiXLfy5DT4epBjOhUWCH3IjIzhsJPObDz-YdSQZkXnipV8enDBvVES_H1xlW7XHJL3QsS30EtplViVoq9V25LExkn5mNvOJUfdV7_UQOTlXOXNSwqkAtkCIcvGFyS5z6WXt3pr7y9ThxFcWuJHy"
        }
    })
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            resolve(data)
        })
})

export default fetchApi;