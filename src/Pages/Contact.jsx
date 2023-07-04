import Header from "../Composant/Navbar";
import Slide from "../Composant/Slide";
import Car1 from "../Composant/Card1";
import Pied from "../Composant/Flooter";
import Formulaire from "../Composant/Formulaire";
import Formulaire1 from "../Composant/Formulaire1";
import Formulaire2 from "../Composant/Formulaire2";
import { Button } from "react-materialize";



function Contact(){
    return (

        <div className="tout">
            <Header/>
            

            <div className="disposition">
                <div className="mulaire">
                    <div className="Formulaire">
                        <Formulaire/>
                        <Formulaire1/>
                        <Formulaire2/>
                        <button className="btn">Send</button>
                        
                    </div>
                </div>
                
                
                

            </div>
                
               <div className="pied">
                <Pied/>
              </div> 
            
        </div>
        
    )
} export default Contact