
import { Row,Col,Card,Icon,CardTitle } from "react-materialize"

function Car1(props){
    return(
        <Row className="Car">
  <Col
    m={6}
    s={12}
  >
    <Card 
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle className="For" image={props.img} reveal waves="light"/>}
      reveal={<p><h6 className="bb1">Effectif: </h6 >{props.effectif} <h6 className="bb1">Situation:</h6> {props.situation} <h6 className="bb1">Adresse:</h6> {props.adresse} <h6 className="bb1">Contact:</h6> {props.contact} </p>}
      revealIcon={<Icon>visibility</Icon>}
      title={<h6 className="bb10"> {props.titre} </h6>}
    >
      <p>
        <a className="nn" href="#">
          {props.Nom}  
        </a>
      </p>
    </Card>
  </Col>
</Row>
    )
} export default Car1