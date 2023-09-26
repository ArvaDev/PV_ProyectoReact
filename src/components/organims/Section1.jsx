import Cart from "../molecules/Cart";

import massive from "../../images/massive.jpg";
import serum from "../../images/Serum.jpg";
import harmor from "../../images/harmor.jpg";
import vital from "../../images/vital.jpg";

import massiveInfo from "../../info/massive";
import serumInfo from "../../info/serum";
import harmorInfo from "../../info/harmor";
import vitalInfo from "../../info/vital";

function Section1() {
    return ( 
        <>
            <Cart foto={massive} nombre={massiveInfo[0]} info={massiveInfo[1]} fondo="#2f3034"></Cart>
            <Cart foto={serum}  nombre={serumInfo[0]} info={serumInfo[1]} fondo="#1f2024"></Cart>
            <Cart foto={harmor}  nombre={harmorInfo[0]} info={harmorInfo[1]} fondo="#0f1014"></Cart>
            <Cart foto={vital}  nombre={vitalInfo[0]} info={vitalInfo[1]} fondo="#0f0004"></Cart>
        </>
     );
}

export default Section1;