import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import {Link } from 'react-router-dom';
import './card.css'

const CardComponent= (cards)=>{
 
    return ( 
     
        <div className='cardItem'>
          <Card border="primary" style={{ width: '17rem', margin: "20px", height: "25rem" }} bg="dark">
            <Card.Img variant="top" src={cards.img} style={{ width: '15rem', margin: "15px", height: "200px" }} />
        
                <div classname="textItem"> 
                      Character {cards.id} : {cards.name}<br />
                      Occupation : {cards.occupation} <br />
                      Status : {cards.status}
                </div>
            <Link to={`/character/${cards.id}`}><div className="Info">Know more</div> </Link>
          </Card>
        </div>
   
    )
   
}

export default CardComponent;
