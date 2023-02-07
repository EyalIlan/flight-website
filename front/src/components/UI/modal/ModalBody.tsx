import { Leg } from '../../../types';

interface IProps {
    leg: Leg
}

const ModalBody = ({ leg }: IProps) => {

    const { DeparturePoint, ArrivalPoint, FlightNumber, AirlineName, AirlineCode } = leg;

    return (
        <div>
            {DeparturePoint ?
            <div>
                <h3>Departure</h3>
                <div className='grid'>
                    <p>date: {DeparturePoint.DateTime }</p>
                    <p>Airport: {DeparturePoint.AirportName }</p>
                    <p>City: {DeparturePoint.City }</p>

                    <div className='grid modal_grid'>
                        <p>FlightNumber: {FlightNumber}</p>
                        <p>AirlineName:  {AirlineName}</p>
                        <p>AirlineCode: {AirlineCode}</p>
                    </div>

                </div> 
                </div>
                :
                ''}

           {ArrivalPoint ? 
            <div>
                <h3>Arrival</h3>
                <div className='grid'>
                    <p>date: { ArrivalPoint.DateTime}</p>
                    <p>Airport: { ArrivalPoint.AirportName}</p>
                    <p>City: { ArrivalPoint.City}</p>

                    <div className='grid modal_grid'>
                        <p>FlightNumber: {FlightNumber}</p>
                        <p>AirlineName: {AirlineName}</p>
                        <p>AirlineCode: {AirlineCode}</p>
                    </div>

                </div> 
                </div>
                :''}

        </div>
    )
}

export default ModalBody;