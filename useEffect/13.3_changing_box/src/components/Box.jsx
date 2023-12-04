import './Box.css'
import { useState, useEffect, useRef } from 'react'
const colors = ['purple', 'yellow', 'blue', 'red', 'green']
function Box() {
    const [count, setCount] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            if (count === 5) {
                ref.current.style.borderRadius = "50%";
                return;
            }
            ref.current.style.backgroundColor = colors[count];
            setCount(count + 1);
        }, 500);

    })

    return (
        <div className='box' ref={ref}></div>
    )
}

export default Box