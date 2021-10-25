
import Card from "react-bootstrap/Card";
import React from "react";
import { Button  } from 'react-bootstrap';


const profil =(el) => {
  return alert( `my name is ${el} `)
}
   
function CardStudents(props) {
 
  
    return (
        <>
        <Card style={{ width:"300px" , height:"300px" }}>
        <Card.Body>
          <Card.Title style={{ color: "green" }}>{props?.data?.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props?.data?.email}
          </Card.Subtitle>
          <Card.Text>
            Phone number: {props?.data.phone} 
          </Card.Text>
          <div style={{ width:"100px" , maxHeight:"100px"}}>
          <img className="card-img-top" src={props?.data?.photo} alt="Card" />

          </div>
          
          <Button variant="primary" onClick={()=>{profil(props.data.name)}}> Profil</Button>
        </Card.Body>
      </Card>
        </>
    
    )
}

export default CardStudents
