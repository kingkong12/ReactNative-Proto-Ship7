import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import { Root, Card, CardItem, Body, Item, Label, Input, Button, Icon, Toast } from 'native-base'; 
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux'; 
import { ChangePasswordSecurity } from '../ACTIONS/Act_Index.js'; 


class EditPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pass: '',
            repass: ''  
        };
    }

    onValChange = (key, value) => {   
        this.setState({ [key]: value });     
     }

     validateUE() {
        const { pass } = this.state;  
        if (this.state.pass === '' || this.state.repass === '') {            
            Toast.show({
                text: 'one or more field is emty',
                type: 'danger',
                position: 'top',
                duration: 4000    
              });
        } else
        if (pass.length < 6) {
            Toast.show({
                text: 'Password length should be more then 6 char ',
                type: 'danger',
                position: 'top',
                duration: 4000    
              });
        } else 
        if (this.state.pass !== this.state.repass) {            
            Toast.show({
                text: 'passwords dont match',
                type: 'danger',
                position: 'top',
                duration: 4000    
              });
        } else {
            this.props.ChangePasswordSecurity(this.state.pass);                        
            Toast.show({
                text: this.state.error,
                buttonText: 'Password Updated ',
                type: 'success',
                position: 'top',
                duration: 4000    
              });
        }        
     }      
     

  render() {
    return (
        <ScrollView style={styles.conatinerStyles}>
            <Root>

                <Card>
                    <CardItem header bordered>
                            <Text 
                                style={{ 
                                    flex: 1, textAlign: 'center', fontWeight: 'bold' 
                                    }}                        
                            >Update Password
                            </Text>
                    </CardItem> 
                

                <CardItem>
                    <Body>
                        <Item stackedLabel>
                            <Label> Password </Label>
                            <Input                           
                            keyboardType='email-address'
                            value={this.state.pass}   
                            onChangeText={
                                this.onValChange.bind(this, 'pass')
                                }                          
                            />
                        </Item>
                    </Body>
                 </CardItem>

                 <CardItem>
                    <Body>
                        <Item stackedLabel>
                            <Label> Re Enter Password </Label>
                            <Input 
                            keyboardType='email-address'  
                            value={this.state.repass}   
                            onChangeText={
                                this.onValChange.bind(this, 'repass')
                                }                            
                            />
                        </Item>
                    </Body>
                 </CardItem>

                <CardItem>
                        
                    <Body>
                        <Button 
                            block 
                            light 
                            onPress={this.validateUE.bind(this)}
                        >                            
                            <Text>Save Changes</Text>
                        </Button>
                    </Body>
                
                </CardItem>   

                <CardItem>
                        
                <Body>
                    <Button 
                    iconLeft block light onPress={() => Actions.popTo('dashboardV2')}
                    >
                        <Icon name='arrow-back' />
                        <Text>Back To Account</Text>
                    </Button>
                </Body>
                
        </CardItem>

                 </Card>
            </Root>
        </ScrollView>    
    );
  }
}

const styles = StyleSheet.create({
    conatinerStyles: {
        flex: 1,
        margin: 5,
        backgroundColor: '#C0C0C0'
    }
});

export default connect(null, { ChangePasswordSecurity })(EditPassword);
