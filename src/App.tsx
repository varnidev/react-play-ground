import TopNavBar from "./component/TopNavBar";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
    <TopNavBar/>    
    <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Home/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
