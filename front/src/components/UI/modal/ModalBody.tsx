import { Leg } from '../../../types';

interface IProps {
    leg: Leg
}

const ModalBody = ({ leg }: IProps) => {

    const { DeparturePoint, ArrivalPoint, FlightNumber, AirlineName, AirlineCode } = leg;

    return (
        <div>
            <p>{DeparturePoint ? 'Depurture' : ''}</p>
            <p>{ArrivalPoint ? 'Arrival' : ''}</p>
            <div>
                <p>{FlightNumber}</p>
                <p>{AirlineName}</p>
                <p>{AirlineCode}</p>
            </div>
        </div>
    )
}

export default ModalBody;