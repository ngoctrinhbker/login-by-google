import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import SignInByOther from "../SignInByOther";
import { getStoredUserData } from "../utils";
import { googleLoginUrl } from "../LoginByGG";

const FormWrapper = styled(Form)`
  width: 600px;
  padding: 50px;
  margin: 0 auto;
  box-shadow: 20px 20px 50px grey;
`;

const ItemWrapper = styled(Form.Item)`
  width: 100%;
  display: flex;
  justify-content: "space-between";
`;

const SignIn = () => {
  const history = useHistory();
  const userData = JSON.parse(getStoredUserData());
  console.log({ userData });
  return userData ? (
    <>
      <p>You already signed in with {userData.email}</p>
      <Link to="/">
        <Button type="primary">Back to Home</Button>
      </Link>
      <br />
      <a href={googleLoginUrl}>Sign in with another account</a>
    </>
  ) : (
    <div>
      <FormWrapper
        name="signIn"
        initialValues={{
          remember: true
        }}
        onFinish={() => history.push("/")}
      >
        <h1 style={{ textAlign: "center" }}>SIGN IN</h1>

        <ItemWrapper
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Please input a validated Email!"
            }
          ]}
        >
          <Input />
        </ItemWrapper>
        <ItemWrapper
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!"
            }
          ]}
        >
          <Input.Password />
        </ItemWrapper>
        <ItemWrapper name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </ItemWrapper>

        <ItemWrapper style={{ textAlign: "right" }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </ItemWrapper>
        <p style={{ textAlign: "center" }}>OR Sign in with: </p>
        <SignInByOther />
      </FormWrapper>
    </div>
  );
};

export default SignIn;
