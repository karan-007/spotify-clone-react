
export const authEndpoint = "http://accounts.spotify.com/authorize";
const clientId = "05d7ad7e03d44fb08de32d8213ee2926";

const redirectUri = "";
// console.log(window.location.href.split('/')[2])
if (window.location.href.split('/')[2] === "localhost:3000") {
    redirectUri = "http://localhost:3000/";
} else {
    redirectUri = "https://karan-spotify.netlify.app/";
}

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromResponse = () => {
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, item) => {
            var parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);

            return initial;
        }, {});
};

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
)}&response_type=token&show_dialog=true`;