import {useState} from "react";
import {signInWithPopup, signOut} from "firebase/auth";
import { auth, provider } from "../../../libs/firebase-config";
import { Button, Container } from "react-bootstrap";

const Index = ()=>{

    const [user, setUser] = useState<any>()

    const signInWithGoogle = ()=>{
        signInWithPopup(auth, provider).then((data:any)=>{
            setUser(data)
        })
    }

    const signOutUser = ()=>{
        signOut(auth).then((data)=>{
            setUser("")
        })
    }

    return <Container style={{ maxWidth: "500px" }} className="text-center pt-2"  fluid >
        {
            !user ? <Button onClick={signInWithGoogle}>Login With Google</Button> : <>
                <h2 className="mb-2">{user?.user?.displayName}</h2>
                <div className="mb-2">{user?.user?.email}</div>
                <Button onClick={signOutUser}>Logout</Button>
            </>
        }
    </Container>
}

export default Index;