import styled from "styled-components";

const divS = styled.div `
    font-family: "Roboto", sans-serif;
    color: ${props => props.color};
    background: ${props => props.fondo};
    height: ${props => props.alto};
    width: ${props => props.ancho};
    display: inline-flex;
    align-items: center;
    flex-direction: ${props => props.direction ? 'column' : 'none' };
    justify-content: center;
`

export default divS;
