import { combineReducers } from 'redux'; 
import AuthReducer from './AuthReducer.js';
import Login from './Login_Red.js';


export default combineReducers({
    auth: AuthReducer,
    login: Login,    
}); 

