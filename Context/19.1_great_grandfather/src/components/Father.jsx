import React, { useContext } from 'react'
import Son from './Son'
import { GiftsContext } from './GiftsContext'

function Father() {
    const {gifts, setGifts} = useContext(GiftsContext);
    setGifts(['phone', 'laptop', 'ipad']);
    return (
        <div className='Father'>
            <Son />
        </div>
    )
}

export default Father