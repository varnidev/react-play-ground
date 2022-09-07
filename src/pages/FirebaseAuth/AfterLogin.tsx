import { useContext} from "react";
import { auth } from "../../libs/firebase-config";
import { Button, Container } from "react-bootstrap";
import { AuthContext } from "../../context/AuthContext";
import LoginWithEmailAndPassword from "./LoginWithEmailAndPassword";
import LoginWithGoogle from "./LoginWithGoogle";

const AfterLogin = ()=>{

    const user = useContext(AuthContext);


    const signOut = async () => {
        await auth.signOut();
      };

    return <Container style={{ maxWidth: "500px" }}   fluid >
        {
            !user ? <>
                <LoginWithEmailAndPassword/>
                <LoginWithGoogle/>
            </>
            : <div className="text-center pt-2">
                <h2 className="mb-2">{user?.displayName}</h2>
                <div className="mb-2">{user?.email}</div>
                <Button onClick={signOut}>Logout</Button>
            </div>
        }
    </Container>
}

export default AfterLogin;