import * as queryString from "query-string";
import axios from "axios";

export const CLIENT_ID =
  "814185148890-bt2jp2m5ak42bjc4v8sq6p4knngor7nr.apps.googleusercontent.com";
export const CLIENT_SECRET = "FghEN1bBrp4LOQaY7Al_57K3";

// gg link: https://console.developers.google.com/apis/credentials?authuser=1&project=login-by-gg&supportedpurview=project

const stringifiedParams = queryString.stringify({
  client_id: CLIENT_ID,
  redirect_uri: "http://localhost:3000/account",
  scope: [
    "https://www.googleapis.com/auth/userinfo.email",
    "https://www.googleapis.com/auth/userinfo.profile"
  ].join(" "), // space seperated string
  response_type: "code",
  access_type: "offline",
  prompt: "consent"
});

const googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?${stringifiedParams}`;

async function getAccessTokenFromCode(code) {
  const { data } = await axios({
    url: `https://oauth2.googleapis.com/token`,
    method: "post",
    data: {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      redirect_uri: "http://localhost:3000/account",
      grant_type: "authorization_code",
      code
    }
  });
  console.log({ data }); // { access_token, expires_in, token_type, refresh_token }
  return data.access_token;
}

async function getGoogleDriveFiles(access_token) {
  const { data } = await axios({
    url: "https://www.googleapis.com/oauth2/v2/userinfo",
    method: "get",
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  });
  console.log(data); // { id, email, given_name, family_name }
  return data;
}

export { googleLoginUrl, getAccessTokenFromCode, getGoogleDriveFiles };
