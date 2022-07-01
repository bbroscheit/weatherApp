import React from 'react';
import Style from '../modules/Card.module.css';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';


function Card({min,max,name,img,onClose,id}) {
    
  return (
    <div className={Style.container}>
      <button onClick={onClose} className={Style.btn}>
        <AiOutlineCloseCircle />
      </button>
      <div>
        <Link to={`/Ciudad/${id}`} className={Style.link}>
          <h1 className={Style.titulo}>{name}</h1>
        </Link>
      </div>
      <div className={Style.data}>
        <div className={Style.containerDatos}>
          <div className={Style.datos}>
              <h3>MAX</h3>
              <span>{max}</span>
          </div>
          <div className={Style.datos}>
              <h3>MIN</h3>
              <span>{min}</span>
          </div>
        </div>
        <div>
            <img className={Style.img} src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="icono" />
        </div>   
      </div>
    </div>
  )
}

export default Card
