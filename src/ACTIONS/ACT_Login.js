import firebase from 'firebase'; 
import { Actions } from 'react-native-router-flux';

import {    
    REGISTER_EMAIL,
    REGISTER_PASSWORD, 
    REGISTER_USER,
    REGISTER_FNAME,
    REGISTER_LNAME,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from './types.js'; 

const actionRegisterFname = (fname) => {
    return {
        type: REGISTER_FNAME,
        payload: fname
    };
};

const actionRegisterLname = (lname) => {
    return {
        type: REGISTER_LNAME,
        payload: lname
    };
};

const actionRegisterEmail = (email) => {
    return {
        type: REGISTER_EMAIL,
        payload: email
    };
};

const actionRegisterPassword = (password) => {
    return {
        type: REGISTER_PASSWORD, 
        payload: password
    };
};

const actionRegisterUser = ({ firstname, lastname, email, password }) => {
    return (dispatch) => {                     
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then( 
            user => RegisterUserSuccess(firstname, lastname, dispatch, user) 
        ).catch(() => RegisterUserFail(dispatch)); 
    };
};

const RegisterUserSuccess = (firstname, lastname, dispatch, user) => {
    Actions.login();  
    dispatch({ type: REGISTER_SUCCESS, 
            payload: { firstname, lastname, user } }            
            ); 
};

 const RegisterUserFail = (dispatch) => {
    dispatch({ type: REGISTER_FAIL });
};

export { 
    actionRegisterFname,
    actionRegisterLname,
    actionRegisterEmail,
    actionRegisterPassword, 
    actionRegisterUser }; 
/*

const SignUpUser = ({ property, value }) => {
    return {
        type: SignUp,
        payload: { property, value }
    };
};

*/

