import React, { Component } from 'react'; 
import { Text, View } from 'react-native'; 
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import validator from 'validator';

import { Cards, CardSection, Button, Input } from '../../COMMON/index.js';
import { emailChanged, passwordChanged, loginUser } from '../../ACTIONS/Act_Index.js';

//EmailValidator.validate(this.props.verifyemail)
class Login extends Component {
    
    constructor() {
        super();
        this.state = { 
            error: '', 
            }; 
    }

   onEmailChange(event) {    
       this.props.emailChanged(event); 
   }

   onPasswordChange(event) {
       this.props.passwordChanged(event); 
   }

   onButtonPress() {
       
        const { email, password } = this.props; 

        if (email === '' || password === '') {
            this.setState({ error: 'ONE OR MORE FIELD IS EMPTY' });
        } else if (password.length < 6) {
            this.setState({ error: 'PASSWORD MUST BE AT LEAST 6 CHAR LONG' });
        } else if (!validator.isEmail(email)) {
            this.setState({ error: 'ENTER A PROPER EMAIL' });
        } else { 
            this.setState({ error: '' });
            console.log('indide');
            this.props.loginUser({ email, password }); 
        }
         /*
        if (email === '' || password === '') {
          this.setState({ error: 'One or more Field is empty' });
        } else if (!validator.isEmail(email)) {
            this.setState({ error: 'Invalid Email or password' });
        } else {
            this.props.loginUser({ email, password }); 
        }
        */
     }

   onForgotPasswordPress() {
        Actions.forgotpassword();
   }

   onSignUpclicked() {       
        Actions.signUp(); 
   }

   renderButton() {
    return (<Button
            onPress={this.onButtonPress.bind(this)}
    > Login </Button>);
   }

    render() {
        return (
            <View>
                <Cards>
                    <CardSection>
                        <Input 
                        placeholder="email@gmail.com"
                        lable="email" 
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                        />                 
                    </CardSection>

                    <CardSection>
                        <Input 
                        secureTextEntry
                        placeholder="password eg: 123.."
                        lable="PASSWORD"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                        /> 
                    </CardSection>    

                    <CardSection>                         
                        {this.renderButton()}   
                    </CardSection>


                    <CardSection>     
                                <Text 
                                style={{ textAlign: 'left', color: 'blue' }} 
                                onPress={this.onForgotPasswordPress.bind(this)}
                                >
                                Forgot Password?
                                </Text>

                                <Text
                                style={{ textAlign: 'right', color: 'blue' }}
                                onPress={this.onSignUpclicked.bind(this)}
                                >
                                   SIGNUP !!! </Text>     
                    </CardSection>  
                    
                    
                    <Text style={{ color: 'red' }} > {this.state.error} </Text>     
                    <Text style={{ color: 'red' }} > {this.props.error} </Text> 
                </Cards> 
            </View>
        );
    }
}

const mapSatateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error               
    };
};


export default connect(mapSatateToProps, { emailChanged, passwordChanged, loginUser })(Login);
