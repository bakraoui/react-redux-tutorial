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



const initialCakeState = {
    numberOfCakes : 10,
}
const initialIceCreamState = {
    numberOfIceCream : 20
}

const cakeReducer = (state = initialCakeState, action) => {
    
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numberOfCakes : state.numberOfCakes - 1
        }
    
        default: return state;
            
    }
}
const iceCreamReducer = (state = initialIceCreamState, action) => {
    
    switch (action.type) {
        
        case BUY_ICECREAM : return {
            ...state,
            numberOfIceCream : state.numberOfIceCream - 1   
        }
    
        default: return state;
            
    }
}


const redux = require('redux')
const createStore = redux.createStore

// should combine multi reducers in one rootReducer
const combineReducer = redux.combineReducers;

const rootReducer = combineReducer({
    cake : cakeReducer,
    iceCream : iceCreamReducer
})

const store = createStore(rootReducer)

console.log('initial state ',store.getState());

const unsubscribe = store.subscribe(()=>console.log('updated state ', store.getState()))

store.dispatch(buy_cake());
store.dispatch(buy_cake());
store.dispatch(buy_icecream());
store.dispatch(buy_icecream());