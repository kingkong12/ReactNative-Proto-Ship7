import React, { Component } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import { Card, CardItem, Body, Item, Label, Input, Button } from 'native-base'; 
import { Actions } from 'react-native-router-flux'; 

export default class MyAccount extends Component {
    constructor(props) {
    super(props);
    this.state = {
                NamePI: 'Mithil Vasani',
                emailSI: 'vasannimithil999@gmail.com',
                passwordSI: '123456',
                Country: 'USA'
        };
    }


  render() {
    return (
      <ScrollView style={styles.conatinerStyles}>  
      <Card> 
            <CardItem header bordered>
                <Text 
                    style={{ flex: 1, textAlign: 'center', fontWeight: 'bold' }}
                >Personal Information
                </Text>
            </CardItem>

            <CardItem>
                <Body>
                    <Item stackedLabel>
                        <Label> Comapny </Label>
                        <Input disabled />
                    </Item>
                </Body>
            </CardItem>

            <CardItem>
                <Body>
                    <Item stackedLabel>
                        <Label> Name</Label>
                        <Input placeholder={this.state.NamePI} disabled />
                    </Item>
                </Body>
            </CardItem>

            <CardItem>
                <Body>
                    <Item stackedLabel>
                        <Label> Other (Loacl) Name </Label>
                        <Input disabled />
                    </Item>
                </Body>
            </CardItem>

            <CardItem>
                <Body>
                    <Button block light onPress={() => Actions.editpersonalinfo()}>
                        <Text > Change Pesonal Information</Text>
                    </Button>
                </Body>
            </CardItem>

          
      </Card>

      <Card> 
        <CardItem header bordered>
                    <Text 
                        style={{ flex: 1, textAlign: 'center', fontWeight: 'bold' }}
                    >Security Information
                    </Text>
        </CardItem>

        <CardItem>
                <Body>
                    <Item stackedLabel>
                        <Label> email </Label>
                        <Input 
                        value={this.state.emailSI}
                        disabled 
                    />
                    </Item>
                </Body>
        </CardItem>

        <CardItem>
                <Body>
                    <Item stackedLabel>
                        <Label> password </Label>
                        <Input 
                        secureTextEntry
                        value={this.state.passwordSI}
                        disabled 
                        />
                    </Item>
                </Body>                   
        </CardItem>

        <CardItem>
                <Body>
                    <Button block light onPress={() => Actions.editemail()}>
                        <Text > Change Email ? </Text>
                    </Button>
                </Body>

                <Body>
                    <Button block light onPress={() => Actions.editpassword()}>
                        <Text > Change Password ? </Text>
                    </Button>
                </Body>
            </CardItem>

      </Card>    

      <Card>
            <CardItem header bordered>
                <Text 
                    style={{ flex: 1, textAlign: 'center', fontWeight: 'bold' }}
                >MyAddress
                </Text>
            </CardItem>   

            <CardItem>
                <Body>
                    <Item stackedLabel>
                        <Label> Country </Label>
                        <Input 
                        placeholder={this.state.Country}
                        disabled />
                    </Item>
                </Body>
            </CardItem>

            <CardItem>
                <Body>
                    <Item stackedLabel>
                        <Label> Address </Label>
                        <Input disabled />
                    </Item>
                </Body>
            </CardItem>

            <CardItem>
                <Body>
                    <Button block light>
                        <Text> Change Address ? </Text>
                    </Button>
                </Body>
            </CardItem>    
      </Card>  

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
