import React from 'react'
import Card from './Card';
import Style from '../modules/Cards.module.css';

export default function Cards({cities, onClose}) {
  if(cities){
    return (
      <div className={Style.container}>
        {cities.map(c => <Card
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
            id={c.id}
            key={c.id}
          /> )}
      </div>
    )
  } else {
    return(
      <div>Sin ciudades</div>
    )
  }
}