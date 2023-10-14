import { Routes, Route } from "react-router-dom";
import Navigation from "./Route/Navigation/Navigation";
import Home from "./Route/Home/Home";
import Shop from "./Route/Shop/Shop";
import Signin from "./Route/Sign-in/Signin";
import SignUp from "./Component/SignUpForm/SignUp";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="sign-in" element={<Signin />}></Route>
        <Route path="sign-up" element={<SignUp />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
