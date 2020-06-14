import React, { Component } from 'react'
import CounterControl from '../../component/CounterControl/CounterControl'
import CounterOutput from '../../component/CounterOutput/CounterOutput'
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actions'

class Counter extends Component {

    render() {
        return (
            <div>
                <CounterOutput value = {this.props.ctr} />
                <CounterControl
                    label = "Increment"
                    clicked = {this.props.incrementControl}
                />
                <CounterControl
                    label = "Decrement"
                    clicked = {this.props.decrementControl}
                />
                <CounterControl
                    label = "Add 5"
                    clicked = {this.props.additionControl}
                />
                <CounterControl
                    label = "Subtract 5"
                    clicked = {this.props.subtractionControl}
                />
                <hr />
                <button onClick = {() => this.props.getResult(this.props.ctr)}>Button</button>
                <ul>
                    {this.props.results.map(result => (
                        <li
                            key = {result.id}
                            onClick = {() => this.props.deleteResult(result.id)}
                        >
                            {result.val}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        results: state.res.result
    }
}

const mapDispatchToProps = dispatch => {
    return {
        incrementControl: () => dispatch({type: actionTypes.INCREMENT}),
        decrementControl: () => dispatch({type: actionTypes.DECREMENT}),
        additionControl: () => dispatch({type: actionTypes.ADD5, value: 5}),
        subtractionControl: () => dispatch({type: actionTypes.SUB5, value: 5}),
        getResult: (result) => dispatch({type: actionTypes.MAKE_RESULT, result: result}),
        deleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, removeId: id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)