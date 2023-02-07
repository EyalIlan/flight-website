import React from 'react'
import './Modal.css'
import { Flight } from '../../../types';
import ModalBody from './ModalBody';

interface Props {
  flight: Flight
  isOpen : React.SetStateAction<any>
}

const Modal: React.FC<Props> = ({ flight, isOpen }) => {
  
  let showFlightWay = ["הלוך","חזור"]

  return (
    <div className='modal-container'>
        <div className='Modal'>
          <div className='Modal_header'>
            <p>Flight ID:{flight.ID}</p>
            <h3>{flight.Segments.length>=2?'הלוך חזור':''}</h3>
            <h3>{flight.Segments[0].Legs[0].DeparturePoint.City} &larr; {flight.Segments[0].Legs[flight.Segments[0].Legs.length-1].ArrivalPoint.City}</h3>
            <button onClick={() =>{isOpen(false)}}><i>close</i></button>
          </div>
          <hr />
          
          {flight.Segments.map((segments,index) => {

            
            return <>
            <h2>{showFlightWay[index]}</h2>
            <h3>{segments.Legs.length >=1? `עצירות בדרך ${segments.Legs.length - 1}`: 'no'}</h3> 
            { segments.Legs.map((leg) => {
              return <ModalBody leg={leg}  />
            })}  
            </>
        
            
          })}
        </div>
    </div> 
        
  )
}

export default Modal