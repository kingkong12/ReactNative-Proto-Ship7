import { combineReducers } from 'redux'; 
import AuthReducer from './AuthReducer.js';
import Login from './Login_Red.js';
import CostCalculator from './R_CostCalculator';

export default combineReducers({
    auth: AuthReducer,
    login: Login,    
    costcalculator: CostCalculator
}); 

