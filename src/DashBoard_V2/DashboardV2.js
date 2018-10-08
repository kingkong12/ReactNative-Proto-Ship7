import React, { Component } from 'react';
import { 
  Text,
  View,
  StyleSheet,
  ScrollView 
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

import Tmp from '../CALCULATOR/tmp';
import YellowScreen from './YellowScreen';
import MyAccount from '../MyAccount/myAccount';
import Billing from '../BILLING/Billing';
import ShipmentHistory from '../ShipmentHistory/ShipmentHistory';
import MainScreen from './MainScreen';
import Email from '../Email/Email.js';

export default class DashboardV2 extends Component {

  constructor(props) {
    super(props); 
    this.state = {
      activeIcon: this.props.active ? this.props.active : 'Home',
      user: this.props.user
    };
  }

//LifeCycle methods to be integrated 

  changeActiveIcon = (e) => {
    this.setState({
      activeIcon: e
    });    
  }

  renderMainConatainer = () => {           
        if (this.state.activeIcon === 'Home') {
          return (
                  <MainScreen 
                    email={this.props.user.email}
                    uid={this.props.user.uid}
                  />
                ); 
        } else if (this.state.activeIcon === 'Email') {
          return <Email />; 
        } else if (this.state.activeIcon === 'Billing') {
          return <Billing />; 
        } else if (this.state.activeIcon === 'History') {
          return <ShipmentHistory />; 
        } else if (this.state.activeIcon === 'PersonalDetail') {
          return <MyAccount />; 
        } else if (this.state.activeIcon === 'Calculator') {
          return <Tmp />; 
        } else if (this.state.activeIcon === 'Faq') {
          return <YellowScreen />; 
        }       
      

        return <Text> World </Text>;
  };


  render() {          
    console.log('Render function: ', this.state.activeIcon); 
    if (this.props.user) {
    return (
      <View style={styles.mainConatainer}>

        <View style={styles.ScrollViewStyling}>

          {this.renderMainConatainer()}  
         
        </View>

        <View style={styles.footerStyle} >

          <ScrollView 
              horizontal style={styles.footerScroll}
              showsHorizontalScrollIndicator={false}
          >

            <Icons 
                name="home-circle" 
                size={40} 
                style={[
                  styles.IconsStyling, 
                  styles.IconOneStyling,
                  this.state.activeIcon === 'Home' ? 
                    styles.IconActiveColor : styles.IconNotActiveColor 
                ]} 
                onPress={() => this.changeActiveIcon('Home')} 
            />

              <Icons 
                name="email" 
                size={40} 
                style={[
                  styles.IconsStyling,
                  this.state.activeIcon === 'Email' ? 
                    styles.IconActiveColor : styles.IconNotActiveColor
                ]}             
                onPress={() => this.changeActiveIcon('Email')}   
                 
              /> 

              <Icons 
                name="history" 
                size={40} 
                style={[
                  styles.IconsStyling,
                  this.state.activeIcon === 'History' ? 
                    styles.IconActiveColor : styles.IconNotActiveColor
                ]} 
                onPress={() => this.changeActiveIcon('History')} 
              />

              <Icons 
                name="file-document" 
                size={40} 
                style={[
                  styles.IconsStyling,
                  this.state.activeIcon === 'Billing' ? 
                    styles.IconActiveColor : styles.IconNotActiveColor
                ]} 
                onPress={() => this.changeActiveIcon('Billing')} 
              />

              <Icons 
                name="account-card-details" 
                size={40} 
                style={[
                  styles.IconsStyling,                
                  this.state.activeIcon === 'PersonalDetail' ? 
                    styles.IconActiveColor : styles.IconNotActiveColor
                ]} 
                onPress={() => this.changeActiveIcon('PersonalDetail')} 
              />

              <Icons 
                name="calculator" 
                size={40} 
                style={[
                  styles.IconsStyling,             
                  this.state.activeIcon === 'Calculator' ? 
                    styles.IconActiveColor : styles.IconNotActiveColor
                ]} 
                onPress={() => this.changeActiveIcon('Calculator')} 
              />         

              <Icons
               name="help-circle" 
               size={40} 
               style={[
                 styles.IconsStyling,             
                 this.state.activeIcon === 'Faq' ? 
                  styles.IconActiveColor : styles.IconNotActiveColor
               ]} 
               onPress={() => this.changeActiveIcon('Faq')} 
              />

          </ScrollView>
        </View>  

      </View>
    );
  }
    return null; 
  }
}


const styles = StyleSheet.create({
      mainConatainer: {
          flex: 1,
          flexDirection: 'column',
          backgroundColor: 'white'
      },
      ScrollViewStyling: {
        flex: 9,          
        backgroundColor: '#C0C0C0',
        margin: 3,                 
        justifyContent: 'flex-start'
      },
      footerStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'space-between',
      },
      footerScrollStyle: {
        margin: 10,
      },
      IconsStyling: {
        marginRight: 30,        
      },
      IconOneStyling: {
        marginLeft: 10,        
      },
      IconNotActiveColor: {
        color: '#808080'
      },
      IconActiveColor: {
        color: 'red'
      }

});
