import StyledDiv from "../atoms/StyledDiv";

import synth from "../../info/Synth";
import dawFoto from "../../images/DAWS.jpg";

function Bienvenida() {
    return ( 
        <>
            <StyledDiv color="#ffffff" fondo="#2A2d30" direction alto="100vh">
                <h1>¿Qué es un Synth?</h1>
                <StyledDiv ancho="70%" alto="100px"><h4>
                {synth}
                </h4></StyledDiv>
                <img src={dawFoto}></img>
            </StyledDiv>
        </>
     );
}

export default Bienvenida;