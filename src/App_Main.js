import React, { Component } from 'react';
//import { Text, View } from 'react-native';
import firebase from 'firebase'; 
import { Provider } from 'react-redux'; 
import { createStore, applyMiddleware } from 'redux'; 
import ReduxThunk from 'redux-thunk';
import reducer from './REDUCERS/App_Reducer';

import Router from './Router';

export default class HelloWorldApp extends Component {
  state = { isLoggedIn: '' };
  
  componentWillMount() {
    const firbaseConfig = {      
        apiKey: 'AIzaSyBRgXPtyfHoWv2cRv0-If9bRoK2GRA83mM',
        authDomain: 'ship-91c8c.firebaseapp.com',
        databaseURL: 'https://ship-91c8c.firebaseio.com',
        projectId: 'ship-91c8c',
        storageBucket: 'ship-91c8c.appspot.com',
        messagingSenderId: '448909811763'
    };  
    firebase.initializeApp(firbaseConfig);
  }

  render() {
    const store = createStore(reducer, {}, applyMiddleware(ReduxThunk)); 
    
    return (
        <Provider store={store}>
            <Router /> 
        </Provider>        
    );
  }
}
