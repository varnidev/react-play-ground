import { AuthContext } from "../../../context/AuthContext";
import { AuthProvider } from "../../../provider/AuthProvider";
import FormAndDetail from "./FormAndDetail";
import { useEffect, useState } from "react";
import { auth } from "../../../libs/firebase-config";


const Index = () => {
    const [user, setUser] = useState<any>();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
          setUser(firebaseUser);
        });
    
        return unsubscribe;
      }, []);
  return <AuthContext.Provider value={user} >
    <FormAndDetail/>
  </AuthContext.Provider>;
};
export default Index;
