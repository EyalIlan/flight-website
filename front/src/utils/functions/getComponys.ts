import Axios from 'axios';
import { Flights } from '../../types';


export const getFlightCompanysDistinct = (flights:Flights) =>{

    const companies = flights.flatMap(flight => {
        return flight.Segments.flatMap(segment => {
            return segment.Legs.flatMap(leg => {
                return leg.AirlineName
            });


        })
    })

/*     const obj:any[] = []

    flights.forEach((p:any) =>{

        p.Segments.forEach((p:any) =>{

            p.Legs.forEach((leg:any) =>{
    
            obj.push(leg.AirlineName)
    
            })
        })

    })
    
    console.log(obj); */
    

    return [...new Set(companies)];

} 

export const getFilghts = async(plan:string) => {

    try{
      const {data} = await Axios.get<Flights>(`http://localhost:5000/flight/search/${plan}`)
      return data;
    }
    catch(e){

    }
  }