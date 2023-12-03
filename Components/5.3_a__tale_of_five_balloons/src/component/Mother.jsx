import React from 'react'
import Child from './Child'

function Mother() {
    const kids = [
        { name: 'Ori', color: 'red' },
        { name: 'Ron', color: 'blue' },
        { name: 'Sigalit', color: 'green' },
        { name: 'Ruti', color: 'yellow' },
        { name: 'Alon', color: 'purple' },
    ]

    return (
        <div className='mother-container'>
            <h1>A Tale of Five Balloons</h1>
            <div className='children-container'>
                {kids.map((child, index) => {
                    return <Child key={index} childName={child.name} color={child.color}></Child>
                })}
            </div>


        </div>
    )
}

export default Mother