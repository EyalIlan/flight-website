import { Leg } from '../../../types';

interface IProps {
    leg: Leg
}

const ModalBody = ({ leg }: IProps) => {

    const { DeparturePoint, ArrivalPoint, FlightNumber, AirlineName, AirlineCode } = leg;

    return (
        <div>
            <p>{DeparturePoint ? 
            <div className='grid'>
                <p>date: {DeparturePoint.DateTime || ArrivalPoint.DateTime}</p>
                <p>Airport: {DeparturePoint.AirportName || ArrivalPoint.AirportName}</p>
                <p>City: {DeparturePoint.City || ArrivalPoint.City}</p>
            </div> : 
            ''}
            </p>
            <p>{ArrivalPoint ?  <div className='grid modal_grid'>
                <p>FlightNumber: {FlightNumber}</p>
                <p>AirlineName: {AirlineName}</p>
                <p>AirlineCode: {AirlineCode}</p>
                            </div> : ''}</p>
          
        </div>
    )
}

export default ModalBody;