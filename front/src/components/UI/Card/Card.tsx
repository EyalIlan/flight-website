import React from 'react'
import './Card.css'
import { Flight } from '../../../types'

interface Props {
    flight: Flight
}

const Card:React.FC<Props> = ({flight}) => {

  let destination =  flight.Segments[0].Legs

  return (
    <div className='card'>
            <div className='card_content'>
                    <h2>  {destination[0].DeparturePoint.City}  &larr;  {destination[destination.length-1].ArrivalPoint.City} </h2>
                    <h3>{flight.AveragePrice}{flight.CurrencySymbol}</h3>
            </div>
    </div>
  )
}

export default Card