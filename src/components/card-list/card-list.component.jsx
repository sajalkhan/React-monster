import React from 'react';
import './card-list.style.css';
import Card from '../Card/card.component';

const CardList = (props)=> (
    
    <div className="card-list">
        {
            props.monsters.map(el=>
            (
                <Card key={el.id} monster={el}/> //another component which will show component as a card
            ))
        }
    </div>
)

export default CardList;