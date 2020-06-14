import React from 'react'
import './CounterOutput.css'

function CounterOutput(props) {
    return (
        <div className = "CounterOutput">
            Current Counter: {props.value}
        </div>
    )
}
export default CounterOutput