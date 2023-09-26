import InverseCart from "../molecules/InverseCart"
import Cart from "../molecules/Cart";

import lmmsFoto from "../../images/lmms.jpg"
import flFoto from "../../images/fl.jpg"
import abletonFoto from "../../images/ableton.jpg"
import waveformFoto from "../../images/waveform.jpg"

import lmms from "../../info/lmms";
import fl from "../../info/fl";
import ableton from "../../info/ableton"
import waveform from "../../info/waveform";

function Section3() {
    return ( 
        <>
            <InverseCart fondo="#2aa050" foto={lmmsFoto} nombre={lmms[0]} info={lmms[1]}></InverseCart>
            <Cart foto={flFoto} fondo="#fa3f00" nombre={fl[0]} info={fl[1]}></Cart>
            <InverseCart fondo="#0f0f0f" foto={abletonFoto} nombre={ableton[0]} info={ableton[1]}></InverseCart>
            <Cart foto={waveformFoto} fondo="#3a3044" nombre={waveform[0]} info={waveform[1]}></Cart>
        </>
     );
}

export default Section3;