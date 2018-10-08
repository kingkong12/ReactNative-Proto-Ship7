import React, { Component } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native'; 
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Container, Content, Footer, FooterTab, Button, Text, Header, Left, Right, Body, Icon } from 'native-base';
import { Card } from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Actions } from 'react-native-router-flux';
import Billing from '../../BILLING/Billing.js';


export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
                    activeButton: 'Home', 
                    user: this.props.user
                    };
    }
    chnageActiveButton(e) {
        this.setState({ activeButton: e });
    }

    renderAciveButton() {
        const { activeButton } = this.state; 

        switch (activeButton) {
            
            case 'MailBox':
            return (<Text>MAIL BOX TAB ACTIVATED</Text>);

            case 'History':
            return (<Text>HISTORY TAB ACTIVATED</Text>);

            case 'Billing':
            return (Actions.myaccount());

            default:
            return (<View>
                <Text>Home TAB</Text>  
                <Text>EMAIl LOGGED IN: {this.state.user.email}</Text>  
                <Text>GENETARTED TOKEN : {this.state.user.uid}</Text>
                </View>);

        }
    }
   

    renderContent() {
        return <Text>{this.state.activeButton}</Text>;
    }

    // TO ADD : logic to valid if user data is present or not else redirect to login page ( userdata, is loggedin )
  render() {      
                return (
                <View style={styles.mainConatainer}>   

                    <View style={styles.mainContent}>
                        <ScrollView styles={{ paddingVertical: 20 }}> 
                            <View>
                            {this.renderContent()}
                            <Text> Hello DashBoard </Text> 
                            <Text> Hello DashBoard2 </Text> 
                            </View>
                        </ScrollView>  
                    </View>

                    <View style={styles.footerStyle}>
                        <ScrollView horizontal style={styles.footerScroll}>
                        
                            <Icons 
                                name="home-circle" 
                                size={50} 
                                style={styles.IconLayout} 
                                onPress={() => this.chnageActiveButton('Home')}
                            />

                            <Icons 
                                name="email" 
                                size={50} 
                                style={styles.IconLayout} 
                                onPress={() => this.chnageActiveButton('Email')}
                            />

                            <Icons name="history" size={50} style={styles.IconLayout} />
                            <Icons name="file-document" size={50} style={styles.IconLayout} />
                            <Icons name="account-card-details" size={50} style={styles.IconLayout} />
                            <Icons name="calculator" size={50} style={styles.IconLayout} />                            
                            <Icons name="help-circle" size={50} style={styles.IconLayout} />                      
                            
                        </ScrollView>
                    </View>
                </View>      
                );
  }
}

const styles = StyleSheet.create({
    mainConatainer: {
        flex: 1,
        flexDirection: 'column',
    },
    mainContent: {
        flex: 9,          
        backgroundColor: '#F08080'
    },
    footerStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'space-between',
    },
    footerScroll: {
        margin: 10,
    },
    IconLayout: {
        marginRight: 30
    },
    headerStyle: { 
        backgroundColor: 'white',
        borderEndWidth: 2 
    },
    itemWrapper: {
        alignItems: 'center', 
        borderRadius: 5,
        borderWidth: 1,
        padding: 30,
        margin: 5,
        backgroundColor: '#44B3C2'
    },
    horizontalItemWrapper: {
        padding: 50,
    },
    testcolor: {
        backgroundColor: '#A8A8A8'
    },
    buttonText: {
        fontSize: 13,
        fontWeight: 'normal',
        color: 'white'
    }
 }); 


/*

                <Container>

                    <Header>

                        <Left style={{ flex: 1 }}>
                        <Text>{this.state.activeButton}</Text> 
                        </Left>

                        <Body style={{ flex: 0 }}>    
                        <Text>{this.state.activeButton}</Text>  
                        </Body>
                        
                        <Right>
                        <Button transparent>
                                <Icon name='power' /> 
                        </Button>
                        </Right> 

                    </Header>

                    
                    <Content>
                        <Grid>
                        <Col>    
                        {this.renderAciveButton()}  
                        </Col>
                        </Grid>           
                    </Content>

                    <Footer >            
                    <FooterTab style={styles.testcolor}>

                        <ScrollView horizontal>
                        

                        <Button 
                            style={[styles.horizontalItemWrapper, styles.itemWrapper]} 
                            onPress={this.chnageActiveButton.bind(this, 'Home')}                
                        >
                        <Text style={styles.buttonText}>Home</Text>
                        </Button>


                        <Button 
                            style={[styles.horizontalItemWrapper, styles.itemWrapper]}
                            onPress={this.chnageActiveButton.bind(this, 'MailBox')}
                        >
                        <Text style={styles.buttonText}>MailBox</Text>
                        </Button>


                        <Button 
                            style={[styles.horizontalItemWrapper, styles.itemWrapper]} 
                            onPress={this.chnageActiveButton.bind(this, 'History')}
                        >
                        <Text style={styles.buttonText}>History</Text>
                        </Button>


                        <Button 
                            style={[styles.horizontalItemWrapper, styles.itemWrapper]} 
                            onPress={this.chnageActiveButton.bind(this, 'Billing')}
                        >
                        <Text style={styles.buttonText}>Billing</Text>
                        </Button>

                    
                        </ScrollView>    

                    </FooterTab>
                    </Footer>
                </Container>

*/
