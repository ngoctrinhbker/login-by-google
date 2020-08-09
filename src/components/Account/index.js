import React, { useEffect, useState } from "react";
import * as queryString from "query-string";
import { getAccessTokenFromCode, getGoogleDriveFiles } from "../LoginByGG";
import { Button } from "antd";
import { USER_DATA, TOKEN } from "../constants";
import { Link } from "react-router-dom";
import { getStoredUserData } from "../utils";

const Account = () => {
  const storedData = JSON.parse(getStoredUserData());

  const [userData, setUserData] = useState(
    storedData !== null ? storedData : null
  );

  useEffect(() => {
    if (!userData) {
      const urlParams = queryString.parse(window.location.search);
      getAccessTokenFromCode(urlParams.code).then(value => {
        // store token for the future request
        window.localStorage.setItem(TOKEN, value);
        getGoogleDriveFiles(value).then(value => {
          setUserData(value);
          console.log({ value: JSON.stringify(value) });
          window.localStorage.setItem(USER_DATA, JSON.stringify(value));
        });
      });
    }
  }, [userData]);

  return userData ? (
    <>
      <p>You already signed in</p>
      <h1>Welcome to my app {userData.name} </h1>
      <Link to="/">
        <Button type="primary">Back to Home</Button>
      </Link>
    </>
  ) : (
    <div>
      <h1>
        You have not signed in, please{" "}
        <Link to="/sign_in" style={{ color: "#008dff" }}>
          Sign in
        </Link>{" "}
        to see more
      </h1>
    </div>
  );
};

export default Account;
