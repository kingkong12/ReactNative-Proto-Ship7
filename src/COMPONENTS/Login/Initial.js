import React, { Component } from 'react'; 
import { Actions } from 'react-native-router-flux';
import { View } from 'react-native'; 
import { Card as Cards } from 'react-native-elements';
import { CardSection, Button } from '../../COMMON/index.js'; 


//Button -> react native
class Initial extends Component {
   
    onLoginPress() {
        Actions.login(); 
    }

    onSignUpPress() {
        Actions.signUp();
    }

    render() {
        return (    
            <View 
                style={{ flex: 1,                
                justifyContent: 'center',
                }}
            >        
                <Cards >
                
                <CardSection >
                    <Button
                    onPress={this.onLoginPress.bind(this)}
                    > Login </Button>  
                </CardSection>   
                 
                <CardSection >
                    <Button
                    onPress={this.onSignUpPress.bind(this)}
                    > Register </Button>  
                </CardSection>  

                </Cards> 
                
            </View>    
        ); 
    }
}


export default Initial; 

