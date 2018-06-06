import React from 'react';
import { Scene, Router } from 'react-native-router-flux'; 
import Initial from './COMPONENTS/Login/Initial.js';
import Login from './COMPONENTS/Login/Login.js';
import SignUp from './COMPONENTS/Login/Signup';
import ForgotPassword from './COMPONENTS/Login/Forgotpass.js';
import Dashboard from './COMPONENTS/Dashboard/Dashboard.js';
import Calculator from './CALCULATOR/calculator.js';
import Tmp from './CALCULATOR/tmp.js';
import ErrorModal from './CALCULATOR/ErrorModal.js';
import DisplayCost from './CALCULATOR/DisplayCost.js';
import MyAccount from './MyAccount/myAccount.js';
import EditPersonalInfo from './MyAccount/EditPersonalInfo.js';
import EditEmail from './MyAccount/EditEmail.js';
import EditPassword from './MyAccount/EditPassword';
import EditAddress from './MyAccount/EditAddress.js';
import DashBoardV2 from './DashBoard_V2/DashboardV2.js';

import Billing from './BILLING/Billing.js'; 
import ShipmentHistory from './ShipmentHistory/ShipmentHistory.js';

const RouterComponent = () => {
    return (
    

        <Router>
            <Scene key="root" hideNavBar>            
                
                
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
                    <Scene key="dashboardV2" component={DashBoardV2} title="Dashboard" hideNavBar />
                    
                    <Scene key="" component={Tmp} title="tmp" hideNavBar />
                    <Scene 
                        key='costcalinfo' component={ErrorModal} title="Modal" 
                        direction="vertical" hideNavBar 
                    /> 
                    <Scene 
                    key="displayCost" component={DisplayCost} title="displayCost" 
                    direction="vertical" hideNavBar 
                    />
                    
                    
                    <Scene key="myaccount" component={MyAccount} title="myaccount" hideNavBar />
                    <Scene 
                        key="editpersonalinfo" 
                        component={EditPersonalInfo} 
                        title="editinfo" 
                        direction="vertical" 
                        hideNavBar 
                        
                    />


                <Scene 
                key="editemail" component={EditEmail} title="editemail" 
                direction="vertical" hideNavBar 
                />                
                <Scene 
                key="editpassword" component={EditPassword} title="editpassword" 
                direction="vertical" hideNavBar 
                />                
                
                <Scene 
                key="editAddress" component={EditAddress} title="editAddress" 
                direction="vertical" hideNavBar
                />
               

                <Scene 
                    key="BillingInfo" component={Billing} title="BillingInfo"
                    
                />

                <Scene 
                    key="ShipmentHistory" component={ShipmentHistory} title="ShipmentHistory"
                    initial
                />

                </Scene>               
        </Router>     


    );
};

export default RouterComponent;


/*

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
                    <Scene key="" component={Tmp} title="tmp" hideNavBar />
                    <Scene 
                        key='costcalinfo' component={ErrorModal} title="Modal" 
                        direction="vertical" hideNavBar 
                    /> 
                    <Scene 
                    key="displayCost" component={DisplayCost} title="displayCost" 
                    direction="vertical" hideNavBar 
                    />
                    <Scene key="myaccount" component={MyAccount} title="myaccount" hideNavBar initial/>
                    <Scene 
                        key="editpersonalinfo" 
                        component={EditPersonalInfo} 
                        title="editinfo" 
                        direction="vertical" 
                        hideNavBar 
                        
                    />
                </Scene>

                <Scene 
                key="editemail" component={EditEmail} title="editemail" 
                direction="vertical" hideNavBar 
                />
                
                <Scene 
                key="editpassword" component={EditPassword} title="editpassword" 
                direction="vertical" hideNavBar 
                />
                
                
                <Scene 
                key="editAddress" component={EditAddress} title="editAddress" 
                direction="vertical" hideNavBar
                />
                </Scene>  
               
        </Router>     


*/