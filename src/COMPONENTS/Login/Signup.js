import React, { Component } from 'react';
import { ScrollView, View } from 'react-native'; 
import { connect } from 'react-redux'; 
import { Actions } from 'react-native-router-flux';
//import { Cards, CardSection, Input, Button } from '../../COMMON/index.js';
import validator from 'validator';

import { 
    Text,
    FormLabel, 
    FormInput, 
    Card,
    Button } from 'react-native-elements';

import { 
    actionRegisterFname,
    actionRegisterLname,
    actionRegisterEmail, 
    actionRegisterPassword, 
    actionRegisterUser } from '../../ACTIONS/Act_Index.js';  


class SignUp extends Component {
    constructor() {
        super();
        this.state = { 
            error: '' 
        }; 
    }

    onFnameChange(event) {        
        this.props.actionRegisterFname(event);
    }
    onLnameChange(event) {        
        this.props.actionRegisterLname(event);
    }
    onRegEmailChange(event) {
        this.props.actionRegisterEmail(event);
    }

    onRegPasswordChange(event) {
        this.props.actionRegisterPassword(event);
    }
    
    onRegButtonPress() {        
        const { registerEmail, registerPassword, registerfname, registerlname } = this.props; 
        
        if (registerEmail === '' || registerPassword === '' || registerfname === '' || 
        registerlname === '') {
            this.setState({ error: 'ONE OR MORE FIELD IS EMPTY' });                
        } else if (!validator.isEmail(registerEmail)) {
                this.setState({ error: 'ENTER A PROPER EMAIL' });
            } else if (registerPassword.length < 6) {
                this.setState({ error: 'Password should be atleast 6 char long' });
            } else { 
                this.setState({ error: '' });
                this.props.actionRegisterUser({ firstname: registerfname, 
                lastname: registerlname, 
                email: registerEmail, 
                password: registerPassword }); 
                }                    
    }
    onSignUpClicked() {
        Actions.login();
        
    }

    onForgotPasswordCLicked() {
        Actions.forgotpassword(); 
    }
    render() {          
        return (

            <ScrollView> 
                <View> 
                    <Card>
                        <FormLabel>
                        Firsat Name 
                        </FormLabel>
                        <FormInput 
                            placeholder='(eg. ohn)' 
                            onChangeText={this.onFnameChange.bind(this)}
                            value={this.props.registerfname}
                        />    
                        
                        <FormLabel>
                        Last Name 
                        </FormLabel>
                        <FormInput 
                            placeholder='(eg.DOE)' 
                            onChangeText={this.onLnameChange.bind(this)}
                            value={this.props.registerlname}
                        /> 

                        <FormLabel>
                        Email 
                        </FormLabel>
                        <FormInput 
                            placeholder='(eg.examople.com)'
                            onChangeText={this.onRegEmailChange.bind(this)}
                            value={this.props.registerEmail}
                        /> 

                        <FormLabel>
                        Password 
                        </FormLabel>
                        <FormInput 
                            secureTextEntry
                            placeholder='(eg.*****)' 
                            onChangeText={this.onRegPasswordChange.bind(this)}
                            value={this.props.registerPassword}
                        /> 
                        
                        <Button
                            raised
                            title='SEND RESET LINK' 
                            rounded
                            onPress={this.onRegButtonPress.bind(this)} 
                        /> 

                        <Text 
                        onPress={this.onSignUpClicked.bind(this)} 
                        >
                        SignIn 
                        </Text> 
                        
                        <Text 
                        onPress={this.onForgotPasswordCLicked.bind(this)}
                        > 
                        Forgot Password?
                        </Text>
                        
                        <Text style={{ color: 'red' }} > {this.state.error} </Text> 
                        <Text style={{ color: 'red' }} > {this.props.error} </Text> 
                    </Card>     
                </View>    
            </ScrollView>      

           
        );
    }
}

const mapSatateToProps = state => {
    return {
        registerEmail: state.login.registerEmail,
        registerPassword: state.login.registerPassword, 
        registerfname: state.login.registerfname,
        registerlname: state.login.registerlname,
        error: state.login.error
    };
};

export default connect(mapSatateToProps, 
    { 
    actionRegisterFname, 
    actionRegisterLname,   
    actionRegisterEmail, 
    actionRegisterPassword,
    actionRegisterUser 
    })(SignUp);

