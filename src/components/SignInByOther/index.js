import React from "react";
import styled from "styled-components";
import { googleLoginUrl } from "../LoginByGG";

const ButtonWrapper = styled.div`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  text-align: center;
  border-radius: 10px;
  background-color: ${props => props.backgroundColor || "grey"};
`;

const LinkWrapper = styled.a`
  color: white;
`;

const SignInByOther = () => {
  return (
    <div>
      <ButtonWrapper backgroundColor="#cf1b30">
        <LinkWrapper href={googleLoginUrl}>SIGN IN WITH GOOGLE</LinkWrapper>
      </ButtonWrapper>
      <ButtonWrapper backgroundColor="#4267b2">
        <LinkWrapper href={googleLoginUrl}>SIGN IN WITH FACEBOOK</LinkWrapper>
      </ButtonWrapper>
    </div>
  );
};

export default SignInByOther;
