import firebase from 'firebase'; 
import { Actions } from 'react-native-router-flux';
//----Sign-in 
import { EMAIL_CHANGED,
    PASSWORD_CHANGED, 
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,  
        
 } from './types.js'; 


  const emailChanged = (email) => {
    return {
        type: EMAIL_CHANGED,
        payload: email
    };
};

 const passwordChanged = (password) => {
    return {
        type: PASSWORD_CHANGED,
        payload: password
    };
};

 const loginUser = ({ email, password }) => {    
    return (dispatch) => {                     
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            user => loginUserSuccess(dispatch, user)
        ).catch(() => loginUserFail(dispatch)); 
    };
};

 const loginUserSuccess = (dispatch, user) => {
    console.log('Success in LOGIN');
    console.log(user.email); 
    console.log(user.uid);
    Actions.dashboard({ user });
    dispatch({ type: LOGIN_USER_SUCCESS, 
                payload: user }); 
};

 const loginUserFail = (dispatch) => {
     console.log('USER LOGIN FAILED');
    dispatch({ type: LOGIN_USER_FAIL });
};

export { emailChanged, passwordChanged, loginUser, loginUserSuccess, loginUserFail };
