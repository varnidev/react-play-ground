import FirebaseAuth from "../pages/FirebaseAuth"

export const exampleObject = (title:string, description:string, component:any,  path:string, link?:string)=>{
    return {
        title,
        description,
        component,
        path,
        link: link || path
    }
}
export const exampleList = [
    exampleObject("Firebase Authentication","Authentication Process Using Firebase.", FirebaseAuth, "/firebase-auth"),
];