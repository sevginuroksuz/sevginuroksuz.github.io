import  {BrowserRouter, Routes, Route} from  "react-router-dom";
import {Home} from "./pages/Home";
import { NotFound } from "./pages/NotFound";

function App() {
  return ( <>
  <BrowserRouter>
    <Routes>
      <Route index element={<Home></Home>}></Route>
      <Route path="*" element={<NotFound></NotFound> }></Route>

    </Routes>
  </BrowserRouter>
  </> )
}

export default App
