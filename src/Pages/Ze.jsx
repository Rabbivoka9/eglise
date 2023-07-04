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
                  <Car1 img="past cospiel.png" Nom='Pasteur Cospiel' effectif='300 Membres'  situation='Église en pleine croissance et a déménagé'  adresse='' contact='+243'  titre='Compassion/PARIS'/>
                </div>

                <div>
                  <Car1 img="past joseph.png" Nom='Pasteur Joseph' effectif='130 Membres'  situation='En pleine démenagement'  adresse='' contact='+243' titre='Compassion/BRUXELLE'/>
                </div>

                <div>
                  <Car1 img="past max.png" Nom='Pasteur Max RENAUX' effectif='10 Membres'  situation='L’église a connu quelques difficultés de sorte à quitter de 50 membres à 10. Elle vit par ailleurs une forte action du Saint Esprit par des miracles.'  adresse='' contact='+243'  titre='Compassion/Luxembourg'/>
                </div>

                <div>
                  <Car1 img="" Nom='Pasteur Jacques' effectif='20 Membres'  situation='L’église cherche à déménager'  adresse='' contact='+243'  titre='Compassion/Braine le comte'/>
                </div>
                <div>
                  <Car1 img="" Nom='Pasteur Armand' effectif='80 Membres'  situation='Besoin de démenagement à cause de la croissance et de la chaleur. Le grand local pour le démenagement coûte 9300$ par mois mais l’église n’a pas assez des moyens pour cela.'  adresse='' contact='+243'  titre='Compassion/Suisse'/>
                </div>


          </div>

            </div>
                
               <div className="pied">
                <Pied/>
              </div> 
            
        </div>
        
    )
} export default Ze