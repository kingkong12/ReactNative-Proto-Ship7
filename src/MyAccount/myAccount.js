import React, { Component } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import { Card, CardItem, Body, Item, Label, Input, Button } from 'native-base'; 
import { Actions } from 'react-native-router-flux'; 
import { connect } from 'react-redux';


class MyAccount extends Component {
    
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
                        <Input 
                            placeholder={this.props.company} 
                            disabled 
                        />
                    </Item>
                </Body>
            </CardItem>

            <CardItem>
                <Body>
                    <Item stackedLabel>
                        <Label> Name</Label>
                        <Input 
                            placeholder={this.props.firstName}
                            disabled 
                        />
                    </Item>
                </Body>
            </CardItem>

            <CardItem>
                <Body>
                    <Item stackedLabel>
                        <Label> Other (Loacl) Name </Label>
                        <Input 
                            placeholder={this.props.alterateName}
                            disabled 
                        />
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
                        placeholder={this.props.email}
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
                        placeholder={this.props.password}
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
                            placeholder='USA'
                            disabled 
                        />
                    </Item>
                </Body>
            </CardItem>

            <CardItem>
                <Body>
                    <Item stackedLabel>
                        <Label> Address </Label>
                        <Input 
                            placeholder={this.props.addressLine1}
                            disabled 
                        />
                    </Item>
                </Body>
            </CardItem>

            <CardItem>
                <Body>
                    <Button block light onPress={() => Actions.editAddress()}>
                        <Text> Change Address ? </Text>
                    </Button>
                </Body>
            </CardItem>    
      </Card>  

      </ScrollView>
    );
  }
}

const mapSatateToProps = state => {
    return {
        company: state.MyAccount.company, 
        firstName: state.MyAccount.firstName,
        lastName: state.MyAccount.lastName,
        alterateName: state.MyAccount.alterateName, 
        email: state.MyAccount.email,
        password: state.MyAccount.password,
        addressLine1: state.MyAccount.addressLine1
    };
};

const styles = StyleSheet.create({
    conatinerStyles: {
        flex: 1,
        margin: 5,
        backgroundColor: '#C0C0C0'
    }
});

export default connect(mapSatateToProps, null)(MyAccount); 
