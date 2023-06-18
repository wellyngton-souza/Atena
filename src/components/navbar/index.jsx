import { Navbar } from "./style";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/navbar/logo.png";
import imgMulher from "../../assets/navbar/mulher-icon.png";

const NavBar = () =>{
    const [menu, setMenu] = useState(false);

    const abrirMenu = () =>{
        setMenu(menu ? false : true);
    };

    return(
        <Navbar>
            <div className="nav-main">
                <img src={logo} alt="logo" />
                <div className="usuario" onClick={abrirMenu}>
                    <div className="user">User</div>
                    <img src={imgMulher} alt="user" />
                </div>
            </div>
            {
                menu && 
                <div className="menu-aberto">
                    <h3>Consultas</h3>
                    <h3>Perfil</h3>
                    <h3>Chat</h3>
                    <h3>Sua Privacidade</h3>
                    <h3>Configurações</h3>
                    <h3><Link to="/">Sair</Link></h3>
                </div>
            }
        </Navbar>
    );
}

export default NavBar;