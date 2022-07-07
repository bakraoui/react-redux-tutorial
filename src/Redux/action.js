

// action : mean the change we want to apply in a state

// action type
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'
// action is an object

const action = {
    type : BUY_CAKE,
    info : 'first action'  // not required
}

// action creator is a function return an action

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
module.exports = {buy_cake, buy_icecream}