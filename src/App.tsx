import TopNavBar from "./component/TopNavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { exampleList } from "./libs/static";
import LoginWithEmailAndPassword from "./pages/FirebaseAuth/LoginWithEmailAndPassword";

function App() {
  return (
    <>
      <BrowserRouter>
        <TopNavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          {exampleList.map((item: any, index: number) => {
            let Component = item.component;
            return (
              <Route key={index} path={item?.path} element={<Component />} />
            );
          })}
          <Route  path={"/firebase-auth/login-with-email-password"} element={<LoginWithEmailAndPassword />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
