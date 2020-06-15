import * as actionTypes from './actions/actions'

const initialState = {
    result: []
}

const reducer = (state = initialState, action) => {

    if(action.type === actionTypes.MAKE_RESULT){
        return{
            ...state,
            result: state.result.concat({val: action.result, id: new Date()})
        }
    }
    if(action.type === actionTypes.DELETE_RESULT){

        const newArray = state.result.filter(ele => ele.id !== action.removeId, [])
        return {
            ...state,
            result: newArray
        }
    }

    return state
}

export default reducer