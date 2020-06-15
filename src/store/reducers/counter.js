import * as actionTypes from './actions/actions'

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {

    if(action.type === actionTypes.INCREMENT){
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if(action.type === actionTypes.DECREMENT){
        return {
            ...state,
            counter: state.counter - 1
        }
    }
    if(action.type === actionTypes.ADD5){
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    if(action.type === actionTypes.SUB5){

        let newState = Object.assign({}, state)
        newState.counter = state.counter - action.value
        return newState
    }

    return state
}

export default reducer