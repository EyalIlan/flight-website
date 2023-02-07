import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './components/UI/Card/Card'
import Navbar from './components/UI/Navbar/Navbar';
import { getFilghts } from './utils/functions/getComponys';
import { Flights, Flight } from './types';
import Modal from './components/UI/modal/Modal';
import FlightSelection from './components/Pages/FlightSelection';

function App() {

  const [showFlightLists, setshowFlightLists] = useState(true)
  const [flightsData, setFilghtsData] = useState<Flights | null>(null)
  const [isFlightModalOpen, setIsFlightModalOpen] = useState(false);
  const [selectedFlight, SetSelectedFlight] = useState<Flight | null>()
  const [flightFilterList,setFlightFilterList] = useState<Flights | null>([])
  



  const fetchFlights = async (param: string) => {

    const flightsData = await getFilghts(param);
    if (flightsData) {
      setFilghtsData(flightsData)
      setFlightFilterList(flightsData)
      setshowFlightLists(false)
    }
  }

  const showFlightDetails = (flight: Flight) => {
    SetSelectedFlight(flight)
    setIsFlightModalOpen(true)
  }

  return (
    <div className="app">
      { isFlightModalOpen && selectedFlight ? <Modal flight={selectedFlight} isOpen={setIsFlightModalOpen} />: showFlightLists ? <FlightSelection handleSelectionClick={fetchFlights} /> :
        flightsData && <>
          <Navbar flights={flightsData} setFlightsData={setFlightFilterList}></Navbar>
          <div className='container'>
            <div className='grid'>
              {flightFilterList?.map((flight,key) => {
                return <button key={key} onClick={() => { showFlightDetails(flight) }}><Card flight={flight} ></Card></button>
              })}
            </div>
          </div>
        </>}
    </div>
  );
}

export default App;
