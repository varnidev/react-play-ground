import TopNavBar from "./component/TopNavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ExampleListProps, exampleRouteList } from "./libs/example-route-list";

function App() {
  return (
    <>
      <BrowserRouter>
        <TopNavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          {exampleRouteList.map((item: ExampleListProps, index: number) => {
            let Component = item.component;
            return (
              <Route key={index} path={item?.path} element={<Component />} />
            );
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
