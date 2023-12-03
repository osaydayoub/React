import React from 'react'

function ImportantNotButtons(props) {
    return (
        <>
            {props.important && <button><b>{props.children}</b></button>}
            {!props.important && <button>{props.children}</button>}

        </>
    )
}

export default ImportantNotButtons