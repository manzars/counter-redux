export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"
export const ADD5 = "ADD5"
export const SUB5 = "SUB5"
export const MAKE_RESULT = "MAKE_RESULT"
export const DELETE_RESULT = "DELETE_RESULT"

export const increment = () => {
    return {
        type: INCREMENT
    }
}
export const decrement = () => {
    return {
        type: DECREMENT
    }
}
export const add5 = () => {
    return {
        type: ADD5,
        value: 5
    }
}
export const sub5 = () => {
    return {
        type: SUB5,
        value: 5
    }
}

const saveResult = (result) => {
    return {
        type: MAKE_RESULT,
        result: result
    }
}
export const makeResult = (result) => {

    return (dispatch) => {
        setTimeout(() => {
            dispatch(saveResult(result)) 
        }, 2000)
    }
}

const delResult = (id) => {
    return {
        type: DELETE_RESULT,
        removeId: id
    }
}

export const deleteResult = (id) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(delResult(id))
        }, 2000)
    }
}