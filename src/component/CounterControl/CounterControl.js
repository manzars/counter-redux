import React from 'react'
import './CounterControl.css'

function CounterControl(props) {
    return (
        <div className = "CounterControl" onClick = {props.clicked}>
            {props.label}
        </div>
    )
}

export default CounterControl
