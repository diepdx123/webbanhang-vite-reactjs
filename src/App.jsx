import { Route, Routes } from "react-router-dom";
import "./App.css";
import LayoutCline from "./layouts/LayoutCline";

function App() {
  console.log(1234);
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutCline />}></Route>
      </Routes>
    </>
  );
}

export default App;
