import React, { useState, useEffect, useMemo } from 'react'
import { getFlightCompanysDistinct } from '../../../utils/functions/getComponys'
import './Navbar.css'
import { Flights } from '../../../types'

interface Props {
    flights: Flights,
    setFlightsData: React.SetStateAction<any>
}


const Navbar: React.FC<Props> = ({ flights, setFlightsData }) => {

    const companys = useMemo<string[]>(() => {
        return getFlightCompanysDistinct(flights)
    }, [flights])


    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(0)
    const [company, setCompany] = useState('')
    const [stops, setStops] = useState(0)

    const filterFlightsClick = () => {

        

        let arr = flights 
        //working
        if(minPrice > 0 && maxPrice>0){
             arr = flights.filter(flight => {
                if ((flight.AveragePrice > minPrice && flight.AveragePrice < maxPrice)) {
                    
                    return flight
                }
            })
        }
         //working
        if(company !== ''){
            arr = arr.filter(flight =>{
                for (let index = 0; index < flight.Segments.length; index++) {
                    for (let i = 0; i < flight.Segments[index].Legs.length; i++) {
                        if(flight.Segments[index].Legs[i].AirlineName === company ){
                            return  flight
                        }
                        
                    }
                }
               
           })
        }
        // filter only the fowards flight stops
        if(stops >= 0){
            arr = arr.filter(flight =>{
                if(flight.Segments[0].Legs.length === stops + 1){
                    return flight
                }

            })
        }

        setFlightsData(arr)
    }

    return (
        <div className='Navbar'>
            <div className='container'>
                <div className='Navbar_content'>
                    <div className=''>
                        <input type='number' name='min-price' id='min-price' onChange={(e) => { setMinPrice(parseInt(e.target.value)) }} />
                        <label htmlFor="min-price">מחיר מינמלי</label>
                    </div>
                    <div className=''>
                        <input type='number' name='max-price' onChange={(e) => { setMaxPrice(parseInt(e.target.value)) }} />
                        <label htmlFor="max-price">מחיר מקסימלי</label>
                    </div>
                    <select name="" id="" onChange={(e) => { setCompany(e.target.value) }}>
                        {companys && companys.map(p => {
                            return <option value={p}>{p}</option>
                        })}
                    </select>
                    <label htmlFor="">חברת תעופה</label>
                    <div>
                        <input type='number' name='Stops' onChange={(e) => { setStops(parseInt(e.target.value)) }} />
                    </div>
                    <label htmlFor="Stops">מספר עצירות</label>
                    <button onClick={filterFlightsClick}>search</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar