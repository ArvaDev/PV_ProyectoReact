import StyledDiv from "../atoms/StyledDiv";

function InverseCart({foto, info, nombre, fondo}) {
    return ( 
        <>
            <StyledDiv ancho="100%" alto="50vh" fondo={fondo} primary color="#dCd0d4">
                <StyledDiv ancho="100%" alto="90%" primary direction>
                    <h1>{nombre}</h1>
                    <StyledDiv ancho="90%" redondo="20px">
                        <h3>{info}</h3>
                    </StyledDiv>
                </StyledDiv>
                <img src={foto} height="100%" width="400px"></img>
            </StyledDiv>
        </>
     );
}

export default InverseCart;
