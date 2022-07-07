// action
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

const action = {
    type : BUY_CAKE,
    info : 'first action'  // not required
}


const buy_cake = () =>{
    return {
        type : BUY_CAKE,
        info : 'first action'
    }
}

const buy_icecream = () =>{
    return {
        type : BUY_ICECREAM,
        info : 'first action'
    }
}

// reducer
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

// store

const redux = require('redux')
const createStore = redux.createStore

const store = createStore(reducer)

console.log(store.getState());

const unsubscribe = store.subscribe(()=>console.log('updated state ', store.getState()))

store.dispatch(buy_cake());
store.dispatch(buy_cake());
store.dispatch(buy_icecream());
store.dispatch(buy_icecream());

unsubscribe()

