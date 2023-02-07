import React from 'react'
import './Modal.css'
import { Flight } from '../../../types';
import ModalBody from './ModalBody';

interface Props {
  flight: Flight
  isOpen: boolean
}

const Modal: React.FC<Props> = ({ flight, isOpen }) => {
  return (
    <div className='menu_select'>
        <div className='Modal'>
          <div className='Modal_header'>
            <p>Flight ID:{flight.ID}</p>
            <button><i>close</i></button>
          </div>
          <hr />
          {flight.Segments.map((segments) => {
            return segments.Legs.map((leg) => {
              return <ModalBody leg={leg}/>
            })
          })}
        </div>
    </div> 
        
  )
}

export default Modal