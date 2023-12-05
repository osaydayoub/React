import React, { useEffect, useRef } from 'react'

function FocusInput() {
    const iputRef = useRef(null);

    useEffect(() => {
        iputRef.current.focus();
    }, []);
    return (
        <div>
            <input type="text" ref={iputRef} />
        </div>
    )
}

export default FocusInput