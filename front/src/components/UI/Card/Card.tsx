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
                    <h2>  {destination[0].DeparturePoint.City}  &larr;  {destination[0].ArrivalPoint.City} </h2>
                    <p>{flight.AveragePrice}{flight.CurrencySymbol}</p>
            </div>
    </div>
  )
}

export default Card