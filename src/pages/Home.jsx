import Menu from "../components/molecules/Menu"
import Precentacion from "../components/organims/Precentacion"
import Section1 from "../components/organims/Section1";
import Section2 from "../components/organims/Section2";
import Section3 from "../components/organims/Section3";

import "./Home.css"

function Home() {
    return ( 
        <div>
            <Menu></Menu>
            <Precentacion></Precentacion>
            <Section1></Section1>
            <Section2></Section2>
            <Section3></Section3>
        </div>
     );
}

export default Home;