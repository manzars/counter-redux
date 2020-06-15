import React, { Component } from 'react'
import CounterControl from '../../component/CounterControl/CounterControl'
import CounterOutput from '../../component/CounterOutput/CounterOutput'
import { connect } from 'react-redux'
import * as actionCreator from '../../store/reducers/actions/actions'

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
        incrementControl: () => dispatch(actionCreator.increment()),
        decrementControl: () => dispatch(actionCreator.decrement()),
        additionControl: () => dispatch(actionCreator.add5()),
        subtractionControl: () => dispatch(actionCreator.sub5(0)),
        getResult: (result) => dispatch(actionCreator.makeResult(result)),
        deleteResult: (id) => dispatch(actionCreator.deleteResult(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)