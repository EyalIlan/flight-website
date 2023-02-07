import React from 'react'
import './Modal.css'
import { Flight } from '../../../types';
import ModalBody from './ModalBody';

interface Props {
  flight: Flight
  isOpen : React.SetStateAction<any>
}

const Modal: React.FC<Props> = ({ flight, isOpen }) => {
  return (
    <div className='modal-container'>
        <div className='Modal'>
          <div className='Modal_header'>
            <p>Flight ID:{flight.ID}</p>
            <button onClick={() =>{isOpen(false)}}><i>close</i></button>
          </div>
          <hr />
          {flight.Segments.map((segments,index) => {

            let Stops = segments.Legs.length
            
            
            

            return segments.Legs.map((leg) => {
              return <ModalBody leg={leg}  />
            })
          })}
        </div>
    </div> 
        
  )
}

export default Modal