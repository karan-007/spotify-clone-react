import React from 'react'
var Spotify = require('spotify-web-api-js');
var s = new Spotify();

function Login() {
    let z = ""
    // s.setAccessToken("BQAS2C-E2Co9YRTeZK-iM9lOhRHA7vP37G2aRRCOt8v-lkcymCm0TwDdWDiayQcLZYEEXY0ob2WLWt_MW2U_5ojQ7F9DTt0hLugqwES2tptbLvUql7ZJTY_2ydE4JAq_vcWWYwXUnTn3UUw_b8KzjplSKAHk9_zi-QGUNIV3W-o5gXmE7ipIaKlewPDDRgMOU-UlqZHmTtCTkU5MAZexCfYG5QiUfOlPpqg2vxuEfYYaoY2Nr6ci9pKyGfZS3h8SMEH6UYFInAL5Iv_GNtbdruhOczTcmEBe");
    // s.getPlaylist("37i9dQZEVXcJZyENOWUFo7").then((response) => {
    //     console.log(response)
    //     z = response.tracks.items[0].track.preview_url
    // }).then(() => {
    //     let play = new Audio(z);
    //     play.play()

    // })


    // // s.getMyCurrentPlaybackState().then((r) => {
    // //     console.log(r);
    // // })
    // s.play().then((r) => {
    //     console.log(r)
    // })

    fetch("https://api.spotify.com/v1/playlists/37i9dQZEVXcJZyENOWUFo7", {
        method: 'GET',
        headers: {
            "Authorization": `Bearer BQAS2C-E2Co9YRTeZK-iM9lOhRHA7vP37G2aRRCOt8v-lkcymCm0TwDdWDiayQcLZYEEXY0ob2WLWt_MW2U_5ojQ7F9DTt0hLugqwES2tptbLvUql7ZJTY_2ydE4JAq_vcWWYwXUnTn3UUw_b8KzjplSKAHk9_zi-QGUNIV3W-o5gXmE7ipIaKlewPDDRgMOU-UlqZHmTtCTkU5MAZexCfYG5QiUfOlPpqg2vxuEfYYaoY2Nr6ci9pKyGfZS3h8SMEH6UYFInAL5Iv_GNtbdruhOczTcmEBe`
        }
    }).then(res => res.json())
        .then((res) => {
            console.log(res)
            z = res.tracks.items[0].track.preview_url
        })
        .then(() => {
            let play = new Audio(z);
            play.play()

        })


    return (
        <div>
            login
        </div>
    )

    // s.pause();
}

export default Login
