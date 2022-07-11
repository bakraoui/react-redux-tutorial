import {  combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import icecreamReducer from "./iceCreams/icecreamReducer";
import jusReducer from "./jus/jusReducer";
import userReducer from "./users/userReducer";
const rootReducers = combineReducers({
    cake : cakeReducer,
    icecream : icecreamReducer,
    jus : jusReducer,
    user : userReducer
})

export default rootReducers;