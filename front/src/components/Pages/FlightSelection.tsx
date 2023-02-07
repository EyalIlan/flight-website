
import React from 'react'

interface IProps {
    handleSelectionClick: (param: string) => Promise<void>
}

const FlightSelection = ({ handleSelectionClick }: IProps) => {


    return (
        <div className='menu_select'>
            <button onClick={() => { handleSelectionClick('1') }}>Plan1</button>
            <button onClick={() => { handleSelectionClick('2') }}>Plan2</button>
            <button onClick={() => { handleSelectionClick('3') }}>Plan3</button>
        </div>
    )

}

export default FlightSelection;