import { BUY_JUS } from "./jusTypes";


const initialState = {
    numberOfJus : 27
}

const jusReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_JUS: return {
            ...state,
            numberOfJus : state.numberOfJus - 1
        }

        default:
            return state;
    }
}

export default jusReducer