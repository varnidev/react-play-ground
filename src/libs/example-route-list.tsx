import FirebaseAuth from "../pages/FirebaseAuth";
import FirestoreDatabase from "../pages/FirestoreDatabase";
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
  link?: string
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
    "Firebase Authentication",
    "Firebase authentication using google and email/password",
    FirebaseAuth,
    ROUTE_PATH_NAME.FIREBASE_AUTH
  ), 
  exampleObject(
    "Firebase Datastore",
    "Working with firebase datastore",
    FirestoreDatabase,
    ROUTE_PATH_NAME.FIRESTORE_DATABASE
  ),
];
