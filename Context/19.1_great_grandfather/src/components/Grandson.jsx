import React, { useContext, useState } from 'react'
import { GiftsContext } from './GiftsContext'

function Grandson() {
    const gifts= useContext(GiftsContext).gifts;
    const [disply, setDisplay] = useState('');
    function handleClick() {
        setDisplay(gifts.join());
    }
    return (
        <div className='Grandson'>
            <h1> Hello From Grandson</h1>
            <button onClick={handleClick} >Display the gifts</button>
            <h2>{disply}</h2>
        </div>
    )
}

export default Grandson