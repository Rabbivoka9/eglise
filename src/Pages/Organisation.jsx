import Header from "../Composant/Navbar";
import Slide from "../Composant/Slide";
import Car1 from "../Composant/Card1";
import Pied from "../Composant/Flooter";


function Ze(){
    return (

        <div className="tout">
            <Header/>
            

            <div className="disposition">

            <div className="zeuro">
                <div>
                  <Car1 img="past cospiel.png" Nom='Pasteur Cospiel' Marcello TUNASI desc='sdfghertydfgh' titre='Compassion/PARIS'/>
                </div>

                <div>
                  <Car1 img="past joseph.png" Nom='Pasteur Joseph' Marcello TUNASI desc='sdfghertydfgh' titre='Compassion/BRUXELLE'/>
                </div>

                <div>
                  <Car1 img="past max.png" Nom='Pasteur Max RENAUX' Marcello TUNASI desc='sdfghertydfgh' titre='Compassion/Luxemb'/>
                </div>


          </div>

            </div>
                
               <div className="pied">
                <Pied/>
              </div> 
            
        </div>
        
    )
} export default Ze