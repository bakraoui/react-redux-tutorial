import axios from "axios";
import { 
    FETCH_USER_FAILURE,
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS
} from "./userTypes";


export const requestUsersData = () =>{
    return {
        type : FETCH_USER_REQUEST
    }
}

export const successUsersData = (users) =>{
    return {
        type : FETCH_USER_SUCCESS,
        payload : users
    }
}

export const failureUsersData = (error) =>{
    return {
        type : FETCH_USER_FAILURE,
        payload : error
    }
}


export const fetchUsers = () => {
    return function (dispatch) {
        dispatch(requestUsersData())

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                dispatch(successUsersData(response.data))
            })

            .catch ((error) => {
                dispatch(failureUsersData(error.message))
            })
    }
}