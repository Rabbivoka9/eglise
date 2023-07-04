import Header from "../Composant/Navbar";
import Slide from "../Composant/Slide";
import Car1 from "../Composant/Card1";
import Pied from "../Composant/Flooter";


function Za(){
    return (

        <div className="tout">
            <Header/>
            

            <div className="disposition">


<div className="zafrik">

<div>
       <Car1 img="past shekinah.png" Nom='Pasteur Shekinah OKAMO' effectif='100 Membres'  situation='L’église évolue très bien.'  adresse='n°156,Rue Motaba, Av.Loutassi Derriere 5 à Sec' contact='+243818039166' titre='Compassion/Brazaville'/>
     </div>

     <div>
       <Car1 img="past peter.png" Nom='Pasteur Peter NDUDI' effectif='57 Membres'  situation='L’église en pleine construction. Attendant le moyen pour construire l’hangar.'  adresse='' contact='+243' titre='Compassion/Pointe-Noire'/>
     </div>

     <div>
       <Car1 img="past togo.png" Nom='Pasteur Jurdain' effectif='57 Membres'  situation='Le pasteur se prépare à partir à Lomé au mois de Juin'  adresse='En attente' contact='+243' titre='Compassion/TOGO'/>
     </div>

     <div>
       <Car1 img="past dev.png" Nom='Pasteur Dave NGELEGWA'  effectif='30 Membres'  situation='Le pasteur sera consacré le 7 mai et se prépare pour aller le 11 mai'  adresse='En attente' contact='+243' titre='Compassion/ABIDJAN'/>
     </div>

     <div>
       <Car1 img="past anthonio.png" Nom='Pasteur Anthonio LUMEKU'  effectif='50 Membres'  situation='L’église a commencé une cellule pour être proche des fidèles'  adresse='En attente' contact='+243'  titre='Compassion/Johannesburg'/>
     </div>

     <div>
       <Car1 img="past marco.png" Nom='Pasteur Marco MAKOSA'  effectif='200 Membres'  situation='L’église évolue très bien et à recu la visite apostolique.'  adresse='En attente' contact='+243' titre='Compassion/DOUALA'/>
     </div>

     <div>
       <Car1 img="past lome.png" Nom='Pasteur Josué KAYINDA'    effectif='60 Membres'  situation='L’église est en pleine construction du temple'  adresse='' contact='+243'  titre='Compassion/YAOUNDE'/>
     </div>
     <div>
       <Car1 img="" Nom='Pasteur Lilianne'  effectif='45 Membres'  situation='On cherche un endroit. Le Pasteur se prépare pour partir'  adresse='' contact='+243'    titre='Compassion/LUANDA'/>
     </div>


</div>
            </div>
                
               <div className="pied">
                <Pied/>
              </div> 
            
        </div>
        
    )
} export default Za