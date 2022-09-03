import { Container } from "react-bootstrap";
import LinkButton from "../../component/LinkButton";

const Index = () => {
  return (
    <Container fluid className="pt-3">
      <LinkButton to="/firebase-auth/login-with-email-password">Login With Email/Password</LinkButton>
    </Container>
  );
};
export default Index;
