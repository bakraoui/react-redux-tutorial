// only one store for the whole application

// allow access the state via getState()

// allow state to be updated via dispatch(action)

// register listener via subscribe(listener) which executed when the store is updated

const redux = require('redux')
const  reducer  = require('./reducer').reducer()
const  action  = require('./action')
// const  buy_icecream  = require('./action')
// create the store
const createStore = redux.createStore
const store = createStore(reducer)

// get the state from store
console.log(store.getState());

// subscribe
const unsubscribe = store.subscribe(()=>console.log('updated state ', store.getState()))

// store with action
store.dispatch(action.buy_cake());
// store.dispatch(action.buy_cake());
// store.dispatch(action.buy_cake());

// unsubscribe
unsubscribe()
