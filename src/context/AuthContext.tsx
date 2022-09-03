import React from "react";
import firebaseAuth from "firebase/auth";

export const AuthContext = React.createContext<firebaseAuth.User | null>(null);