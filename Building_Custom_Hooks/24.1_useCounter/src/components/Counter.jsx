import React from 'react'
import { useCounter } from './customHook/useCounter'

function Counter({ num }) {
    const [counter, addOne, removeOne, double, divide] = useCounter(num)
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={addOne}>addOne</button>
            <button onClick={removeOne}>removeOne</button>
            <button onClick={double}>double</button>
            <button onClick={divide}>divide</button>
        </div>
    )
}

export default Counter