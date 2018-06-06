import { combineReducers } from 'redux'; 
import AuthReducer from './AuthReducer.js';
import Login from './Login_Red.js';
import CostCalculator from './R_CostCalculator';
import myAccount from './R_Myaccount.js';
import BillTestData from './R_BillTestData.js';
import Billing from './R_Billing.js'; 
import HistoryTestData from './R_HistoryTestData.js';
import HistoryR from './R_History.js'; 

export default combineReducers({
    auth: AuthReducer,
    login: Login,    
    costcalculator: CostCalculator,
    MyAccount: myAccount, 
    testData: BillTestData, 
    billing: Billing,
    testDataH: HistoryTestData, 
    history: HistoryR, 
}); 

