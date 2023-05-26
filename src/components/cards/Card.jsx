import React from 'react'
import './Card.css'
import { useNavigate } from 'react-router-dom'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
const Card = ({src,title,discription,price}) => {
  const history=useNavigate();
  return (
    <div className='card' onClick={()=> history("./search")}>
      <img src={src} alt="" />
      <div className="arrow">
      <ArrowLeftIcon />
      <ArrowRightIcon/>
      </div>
      <div className="card__info">
        <h2>{title}</h2>
        <h4>{discription}</h4>
        <h3>{price}</h3>
      </div>
    </div>
  )
}

export default Card
