import React, { useState } from "react";
import { authService, firebaseInstance } from "../../fbConfig";
import styled from "styled-components";
import { Envelope } from "@styled-icons/boxicons-regular";
import { LockPassword } from "@styled-icons/remix-line";
import { Google } from "@styled-icons/boxicons-logos";
import { Facebook } from "@styled-icons/boxicons-logos";
import { Twitter } from "@styled-icons/boxicons-logos";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const WrapperIcon = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 300px;
  height: 40px;
  margin: 8px;
  border: none;
  border-radius: 6px;
  padding: 0px 10px 0px 38px;
`;

const EnvelopeIcon = styled(Envelope)`
  position: absolute;
  top: 17px;
  left: 16px;
  width: 24px;
  opacity: 0.8;
`;

const LockPasswordIcon = styled(LockPassword)`
  position: absolute;
  top: 17px;
  left: 16px;
  width: 24px;
  opacity: 0.8;
`;

const Error = styled.div`
  color: #e57373;
  font-size: 12px;
`;

const Submit = styled.input`
  width: 300px;
  height: 40px;
  margin: 8px;
  border: none;
  border-radius: 6px;
  padding: 0px 10px;
  color: white;
  background-color: #ffb74d;
  cursor: pointer;
`;

const Button = styled.button`
  width: 300px;
  height: 40px;
  margin: 8px;
  border: none;
  border-radius: 6px;
  padding: 0px 10px;
  color: white;
  background-color: #66bb6a;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const GoogleIcon = styled(Google)`
  width: 24px;
  margin-right: 4px;
`;

const FacebookIcon = styled(Facebook)`
  width: 24px;
  margin-right: 4px;
`;

const TwitterIcon = styled(Twitter)`
  width: 24px;
  margin-right: 4px;
`;

const FBAuth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSignIn = async () => {
    try {
      await authService.signInWithEmailAndPassword(email, password);
      setIsLoggedIn(true);
      setError("");
    } catch (e) {
      setError(e.message);
    }
  };

  const onSignInWithSocial = async (event) => {
    const {
      target: { name },
    } = event;

    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "facebook") {
      provider = new firebaseInstance.auth.FacebookAuthProvider();
    } else if (name === "twitter") {
      provider = new firebaseInstance.auth.TwitterAuthProvider();
    }
    await authService.signInWithPopup(provider);
    setIsLoggedIn(true);
  };

  const onSignUp = async () => {
    try {
      await authService.createUserWithEmailAndPassword(email, password);
      setIsLoggedIn(true);
      setError("");
    } catch (e) {
      setError(e.message);
    }
  };

  const onSignOut = async () => {
    await authService.signOut();
    setIsLoggedIn(false);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <WrapperIcon>
          <Input
            name="email"
            type="text"
            value={email}
            placeholder="Input your email"
            onChange={onChange}
            required
          />
          <EnvelopeIcon />
        </WrapperIcon>
        <WrapperIcon>
          <Input
            name="password"
            type="password"
            value={password}
            placeholder="Input your password"
            onChange={onChange}
            required
          />
          <LockPasswordIcon />
        </WrapperIcon>
        {error && <Error>{error}</Error>}
        {isLoggedIn ? (
          <Submit type="submit" value="Sign Out" onClick={onSignOut} />
        ) : (
          <>
            <Submit type="submit" value="Sign In" onClick={onSignIn} />
            <Submit type="submit" value="Sign Up" onClick={onSignUp} />
          </>
        )}
      </Form>
      <Button name="google" onClick={onSignInWithSocial}>
        <GoogleIcon />
        Sign In with Google
      </Button>
      <Button name="facebook" onClick={onSignInWithSocial}>
        <FacebookIcon />
        Sign In with Facebook
      </Button>
      <Button name="twitter" onClick={onSignInWithSocial}>
        <TwitterIcon />
        Sign In with Twitter
      </Button>
    </Container>
  );
};

export default FBAuth;
