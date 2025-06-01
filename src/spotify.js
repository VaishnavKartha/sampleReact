const authEndpoint="https://accounts.spotify.com/authorize?"
const clientID="cd4bbbd43c9c4c93bd17029c58238aa0"
const clientSecret="2ca606fd46ba4a74857ff085a9be664d";
const redirectUrl="https://www.google.com/"
const scopes=["user-library-read","playlist-read-private"];

export const loginEndpoint=`${authEndpoint}client_id=${clientID}&redirect_uri=${redirectUrl}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

