import React, { useRef, useState } from "react";
import { Button, Col, Container, Form, Row, Alert } from "react-bootstrap";
import FormControl from "../../component/form/FormControl";
import {
  createNewAccount,
  loginWitEmailPassword,
} from "../../libs/firebase-config";

const LoginWithEmailAndPassword = (props: any) => {
  const [errorMessage, setErrorMessage] = useState<any>();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const createAccount = async () => {
    try {
      await createNewAccount(
        emailRef.current!.value,
        passwordRef.current!.value
      );
      setErrorMessage("");
    } catch (error: any) {
      console.error(error);
      setErrorMessage(error?.message);
    }
  };

  const signIn = async () => {
    try {
      await loginWitEmailPassword(
        emailRef.current!.value,
        passwordRef.current!.value
      );
      setErrorMessage("");
    } catch (error: any) {
      console.error(error);
      setErrorMessage(error?.message);
    }
  };

  return (
    <>
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
      <Container style={{ maxWidth: "500px" }} fluid>
        <Form className="mt-4">
          <FormControl
            ref={emailRef}
            formGroupProps={{
              className: "mb-2",
              controlId: "formEmail",
            }}
            label="E-Mail"
            formControlProps={{
              type: "email",
              placeholder: "E-Mail",
            }}
          />
          <FormControl
            ref={passwordRef}
            formGroupProps={{
              className: "mb-4",
              controlId: "formPassword",
            }}
            label="Password"
            formControlProps={{
              type: "password",
              placeholder: "Password",
            }}
          />
          <Row className="mb-4">
            <Col xs={6} className="d-grid gap-2">
              <Button onClick={createAccount} type="button">
                Sign Up
              </Button>
            </Col>
            <Col xs={6} className="d-grid gap-2">
              <Button onClick={signIn} type="button" variant="secondary">
                Sign In
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default LoginWithEmailAndPassword;
