// reducer : define how the state will be change (+,-,*,...)

// is a function take two arguments
    // the initial state
    // the action 

    // return the new state (after change)


const initialState = {
    numberOfCakes : 10,
    numberOfIceCream : 20
}

const reducer = (state = initialState, action) => {
    
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numberOfCakes : state.numberOfCakes - 1
        }

        case BUY_ICECREAM : return {
            ...state,
            numberOfIceCream : state.numberOfIceCream - 1   
        }
    
        default: return state;
            
    }
}


module.exports = {reducer}