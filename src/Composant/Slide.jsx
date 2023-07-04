import { Carousel } from "react-materialize"


function Slide (){
    return(
      <div className="global">
               <Carousel  
  carouselId="Carousel-48"
  className="Gl, white-text center, sp"
  options={{
    fullWidth: true,
    indicators: true
  }}
>
  <div className="red">
    <h1 className="sides-7 ">
      COORDINNATION DE LA COMMUNAUTE CREFM
    </h1>
    <h3 className="titre1">
      ANNUAIRE DES EXTENSIONS
    </h3>
  </div>
  <div className="amber">
    <h2>
    L’histoire d’amour
    d’un Dieu fidèle
    </h2>
    <p className="pres">
    La communauté CREFM, nommément Centre de Réveil, d’Évangélisation de Formation et de Mission, a été fondée par le Pasteur Marcello Jérémie Tunasi en 2012. Mais c’est l’Eglise La Compassion qui en a été le précurseur en 1998. Cette année-là “La Compassion” entre en effet dans une nouvelle ère, celle qui changera à jamais son histoire. Commencée à Lemba, son évolution se poursuit depuis à Limete où nous avons déménagés, poussés dans ce choix par le Saint-Esprit. 
    </p>
  </div>
  <div className="green">
    
    <p className="pp">
     
« Car Dieu a tant aimé le monde qu’il a donné son Fils unique afin que quiconque croit en Lui
ne périsse point mais qu’il ait la vie éternelle. »
    </p>
    <h2>
    Jean 3:16
    </h2>
  </div>
</Carousel>
      </div>

       
    )
} export default Slide