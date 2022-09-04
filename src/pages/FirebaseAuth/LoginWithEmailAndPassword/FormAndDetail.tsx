import React, { useContext, useRef, useState } from "react";
import { Button, Col, Container, Form, Row , Alert} from "react-bootstrap";
import { AuthContext } from "../../../context/AuthContext";
import { auth, createNewAccount, loginWitEmailPassword } from "../../../libs/firebase-config";

const FormAndDetail = (props:any) => {
    const user = useContext(AuthContext);

    const [errorMessage, setErrorMessage] = useState<any>();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const createAccount = async () => {
    try {
      await createNewAccount(
        emailRef.current!.value,
        passwordRef.current!.value
      );
      setErrorMessage("")
    } catch (error:any) {
      console.error(error);
      setErrorMessage(error?.message)
    }
  };

  const signIn = async () => {
    try {
      await loginWitEmailPassword(
        emailRef.current!.value,
        passwordRef.current!.value
      );
      setErrorMessage("") 
    } catch (error:any) {
      console.error(error);
      setErrorMessage(error?.message)
    }
  };

  const signOut = async () => {
    await auth.signOut();
  };

  return (
    <>
        {
            errorMessage && <Alert variant="danger">{errorMessage}</Alert>
        }
      {!user ? (
        <Container style={{ maxWidth: "500px" }} fluid>
          <Form className="mt-4">
            <Form.Group  className="mb-3"  controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control ref={emailRef} type="email" placeholder="email" />
            </Form.Group>
            <Form.Group  className="mb-3"  controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                ref={passwordRef}
                type="password"
                placeholder="password"
              />
            </Form.Group>
            <Row>
              <Col xs={6} className="d-grid gap-2">
                <Button onClick={createAccount} type="button" >
                  Sign Up
                </Button>
              </Col>
              <Col xs={6} className="d-grid gap-2">
                <Button
                  onClick={signIn}
                  type="button"
                  variant="secondary"
                  
                >
                  Sign In
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      ) : (
        <div className="text-center">
        <h2 className="mt-4">Welcome, {user.email}</h2>
        <Button onClick={signOut}>Sign Out</Button>
        </div>
      )}
    </>
  );
};

export default FormAndDetail;
