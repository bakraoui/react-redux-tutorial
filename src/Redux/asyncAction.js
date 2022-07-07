// Fetch data from an endpoint API and add it to the store


const redux = require('redux')
const applyMiddleware = redux.applyMiddleware
const thunkmiddleware = require('redux-thunk').default
const axios = require('axios');
const createStore = redux.createStore

// state 
const initialState = {
    loading : false,
    data : [],
    error : ''
}

// actions

const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST'
const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE'

const fetchdatarequest = () =>{
    return {
        type : FETCH_DATA_REQUEST
    }
}
const fetchdatasuccess = (data) =>{
    return {
        type : FETCH_DATA_SUCCESS,
        payload : data
    }
}
const fetchdatafailure = (error) =>{
    return {
        type : FETCH_DATA_FAILURE,
        payload : error
    }
}

// reducer

const reducer = (state = initialState,action) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST: return {
            ...state, 
            loading : true
        }
        case FETCH_DATA_SUCCESS: return {
            ...state, 
            data : action.payload,
            error : ''
        }
        case FETCH_DATA_FAILURE: return {
            ...state, 
            error : action.payload
        }
    
        default:
            break;
    }
}

// store 


const store = createStore(reducer, applyMiddleware(thunkmiddleware))