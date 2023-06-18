import { Link } from "react-router-dom";

const Login = () =>{
  return (
    <>
        <h2>Tela de Login</h2>
        <p><Link to="/home">ir para tela principal</Link></p>
        <p><Link to="/cadastro">ir para tela Cadastro</Link></p>
    </>
  );
}

export default Login;
