import React, { Component } from 'react'; 
import { View } from 'react-native'; 
import { connect } from 'react-redux';
import validator from 'validator';
import { Root, Toast } from 'native-base';

import { 
    Text,
    FormLabel, 
    FormInput, 
    Card,
    Button } from 'react-native-elements';

class ForgotPass extends Component {
    
    
    constructor() {
        super();
        this.state = { 
            forgotPassword: '',
            error: '' 
        };
        }
    

    onForgotPassWordChange(forgotPassword) {
        this.setState({ forgotPassword });
    }

    
    onPRressSendRestLink() {
        //clear ana errror 
       const { forgotPassword } = this.state;

       if (validator.isEmail(forgotPassword)) {    // success in sending verification mail
            this.setState({ 
                error: 'VERIFICATION CODE SEND PLEASE CHECK YOUR EMAIL TO RESET' 
            });               
        } else {
            this.setState({ 
                error: 'ENTER A PROPER EMAIL' 
            }); // failure in sending varifiication mail                    
        }
    }

    testFun() {
        if (this.state.error !== '') {
            return (Toast.show({
                text: this.state.error,
                buttonText: 'Okay',
                type: 'danger',
            
              }));
        } 
        return (null);       
    }
    
    render() {        
        return (
            <Root> 
            <Card >

                <FormLabel>
                    ENTER EMAIL ID
                </FormLabel>

                <FormInput 
                placeholder='abc@example.com' 
                vlaue={this.state.forgotPassword}
                onChangeText={this.onForgotPassWordChange.bind(this)}                
                />
                 
                <Button
                raised
                title='SEND RESET LINK' 
                rounded
                onPress={this.onPRressSendRestLink.bind(this)} 
                />                                 
                {this.testFun()}
                
            </Card >     
            </Root>   
                   
        );
    }
}


export default connect(null, {})(ForgotPass);
