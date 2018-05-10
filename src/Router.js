import React from 'react';
import { Scene, Router } from 'react-native-router-flux'; 
import Initial from './COMPONENTS/Login/Initial.js';
import Login from './COMPONENTS/Login/Login.js';
import SignUp from './COMPONENTS/Login/Signup';
import ForgotPassword from './COMPONENTS/Login/Forgotpass.js';
import Dashboard from './COMPONENTS/Dashboard/Dashboard.js';
import Calculator from './CALCULATOR/calculator.js';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar> 
                <Scene key="Scene_1_Auth" > 
                <Scene 
                    key="initial_page" 
                    component={Initial} 
                    title="Initial_Page" 
                    hideNavBar  
                                        
                />
                <Scene key="login" component={Login} title="Login" />
                <Scene key="signUp" component={SignUp} title="Register" /> 
                <Scene key="forgotpassword" component={ForgotPassword} title="ForgotPassword" />
                <Scene key="dashboard" component={Dashboard} title="Dashboard" />
                <Scene key="costcalculator" component={Calculator} title="Cost CAlculator" initial />  
                </Scene>
            </Scene>    
        </Router>     
    );
};

export default RouterComponent;
