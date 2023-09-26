import StyledDiv from "../atoms/StyledDiv";

function Cart({foto, info, nombre, fondo}) {
    return ( 
        <>
            <StyledDiv ancho="100%" alto="50vh" fondo={fondo} color="#dCd0d4">
                <img src={foto} height="90%" width="400px"></img>
                <StyledDiv ancho="100%" alto="90%" direction>
                    <h1>{nombre}</h1>
                    <StyledDiv ancho="90%" redondo="20px">
                        <h3>{info}</h3>
                    </StyledDiv>
                </StyledDiv>
            </StyledDiv>
        </>
     );
}

export default Cart;
