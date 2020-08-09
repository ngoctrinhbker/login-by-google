import React from "react";
import { Link } from "react-router-dom";
import { TOKEN, USER_DATA } from "../constants";
import { Button } from "antd";
import { isExpiredToken, getStoredUserData } from "../utils";

const Home = () => {
  return (
    <div>
      {isExpiredToken() ? (
        <>
          <h1>
            Welcome to my app, please{" "}
            <Link to="/sign_in" style={{ color: "#008dff" }}>
              SIGN IN
            </Link>{" "}
            to see more
          </h1>
        </>
      ) : (
        <>
          <p>HELLO {JSON.parse(getStoredUserData()).name}</p>
          <Link to="/sign_in">
            <Button
              onClick={() => {
                window.localStorage.removeItem(TOKEN);
                window.localStorage.removeItem(USER_DATA);
              }}
            >
              SIGN OUT
            </Button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Home;
