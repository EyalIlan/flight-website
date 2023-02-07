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

  // useEffect(() => {
  //   fetchFlights('1');
  // }, [])

  const fetchFlights = async (param: string) => {

    const flightsData = await getFilghts(param);
    if (flightsData) {
      setFilghtsData(flightsData)
      setshowFlightLists(false)
    }
  }

  // const handleClick = async (param: string) => {
  //   await fetchFlights(param)
  // }

  const showFlightDetails = (flight: Flight) => {
    SetSelectedFlight(flight)
    setIsFlightModalOpen(true)
  }

  return (
    <div className="app">
      { isFlightModalOpen && selectedFlight ? <Modal flight={selectedFlight} isOpen={setIsFlightModalOpen} />: showFlightLists ? <FlightSelection handleSelectionClick={fetchFlights} /> :
        flightsData && <>
          <Navbar flights={flightsData} setFlightsData={setFilghtsData}></Navbar>
          <div className='container'>
            <div className='grid'>
              {flightsData?.map(flight => {
                return <button onClick={() => { showFlightDetails(flight) }}><Card flight={flight} ></Card></button>
              })}
            </div>
          </div>
        </>}
    </div>
  );
}

export default App;
