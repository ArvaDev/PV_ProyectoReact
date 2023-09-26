import StyledDiv from "../atoms/StyledDiv";

import daw from "../../info/daw";

function Section2() {
    return ( 
        <>
            <StyledDiv color="#ffffff" fondo="#4a1920" direction alto="100vh">
                <h1>DAWs para uso</h1>
                <h3>¿Qué es un DAW?</h3>
                <StyledDiv ancho="70%" alto="100px"><h4>{daw}</h4></StyledDiv>
            </StyledDiv>
        </>
     );
}

export default Section2;