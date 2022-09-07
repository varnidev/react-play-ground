import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../libs/firebase-config";
import { Button, Container } from "react-bootstrap";

const LoginWithGoogle = () => {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((data: any) => {});
  };
  

  return (
    <Container style={{ maxWidth: "500px" }} className="text-center pt-2" fluid>
      <Button onClick={signInWithGoogle}>Login With Google</Button>
    </Container>
  );
};

export default LoginWithGoogle;
