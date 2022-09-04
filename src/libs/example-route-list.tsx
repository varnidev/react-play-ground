import LoginWithEmailAndPassword from "../pages/FirebaseAuth/LoginWithEmailAndPassword";
import { ROUTE_PATH_NAME } from "./static";

export interface ExampleListProps {
  title: string;
  description: string;
  component: any;
  path: string;
  link?: string;
}

export const exampleObject = (
  title: string,
  description: string,
  component: any,
  path: ROUTE_PATH_NAME,
  link?: string,
): ExampleListProps => {
  return {
    title,
    description,
    component,
    path,
    link: link || path,
  };
};

export const exampleRouteList: Array<ExampleListProps> = [
  exampleObject(
    "Firebase Authentication With Email/Password",
    "Authentication Process Using Firebase.",
    LoginWithEmailAndPassword,
    ROUTE_PATH_NAME.FIREBASE_AUTH_EMAIL_PASSWORD
  ),
];
