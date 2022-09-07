import { useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../libs/firebase-config";

export const AuthProvider = (props: any) => {
  const [user, setUser] = useState<any>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={user}>{props?.children}</AuthContext.Provider>
  );
};
