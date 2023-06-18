import Home from "../pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import Cadastro from "../pages/cadastro";

const App = () =>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
