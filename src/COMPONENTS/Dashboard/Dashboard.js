import React, { Component } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native'; 
import { Container, Content, Footer, FooterTab, Button, Text, Header, Left, Right, Body, Icon } from 'native-base';


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
            return (<Text>Billing TAB </Text>);

            default:
            return (<View>
                <Text>Home TAB</Text>  
                <Text>EMAIl LOGGED IN: {this.state.user.email}</Text>  
                <Text>GENETARTED TOKEN : {this.state.user.uid}</Text>
                </View>);

        }
    }
    // TO ADD : logic to valid if user data is present or not else redirect to login page ( userdata, is loggedin )
  render() {      
                return (
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
                        {this.renderAciveButton()}            
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
                );
  }
}

const styles = StyleSheet.create({
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

