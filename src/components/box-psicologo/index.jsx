import { Boxpsicologo } from "./style";
import psicologoFoto from "../../assets/psicologo/psicologoFoto.png";

const BoxPsicologo = () =>{
    return(
        <Boxpsicologo>
            <img src={psicologoFoto} alt="psicologo" />
            <div className="dados-psicologo">
                <div>
                    <h2>Daniel henrique</h2>
                    <h3>19 anos</h3>
                </div>
                <div>
                    <h3>Neurologista</h3>
                    <h3>Espirito Santo</h3>
                </div>
                <div>
                    <h3>Lorem ipsum</h3>
                    <h3>Lorem ipsum</h3>
                </div>
                <div>
                    <h3>Lorem ipsum</h3>
                    <h3>Lorem ipsum</h3>
                </div>
            </div>
        </Boxpsicologo>
    );
}

export default BoxPsicologo;