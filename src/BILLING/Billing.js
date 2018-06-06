import React, { Component } from 'react';
import { 
        Text,
        View, 
        StyleSheet,
        FlatList,
        TouchableHighlight,
       
} from 'react-native';

import {
        Card, CardItem, Container, Picker
} from 'native-base';
import _ from 'lodash';  
import { CardSection } from '../COMMON/index.js';

import { connect } from 'react-redux';
import BillingItems from './BillingItems.js'; 

class HelloWorldApp extends Component {
  
  constructor(){
    super(); 
    this.state = {
      filterstatus: 'all',
      filterDate: 'all'
    };
  }

  onValChange = (key, value) => {          
     this.setState({ [key]: value });
    }


  render() {
    const { testData } = this.props; 
    const { filterstatus, filterDate } = this.state; 
    var filterData = Object.assign(testData);

    if (filterDate === 'all') {
      if (filterstatus === 'debit') { // displaying all data with debit
        filterData = testData.filter((e) => e.type === 'Debit'); 
      } else if (filterstatus === 'credit') { // dipslyaing all data with credit
        filterData = testData.filter((e) => e.type === 'Credit');
      } else {
        filterData = testData.sort((d1, d2) => new Date(d1.date) - new Date(d2.date)).reverse();
      } // displaying all data
    } else 
    if (filterDate === '2017') {        
        if (filterstatus === 'credit') {
          filterData = Object.assign(_.filter(testData, a => new Date(a.date).getFullYear().toString() === '2017' && a.type === 'Credit'));
        } else if (filterstatus === 'debit') { 
          filterData = Object.assign(_.filter(testData, a => new Date(a.date).getFullYear().toString() === '2017' && a.type === 'Debit'));
        } else {
          filterData = Object.assign(_.filter(testData, a => new Date(a.date).getFullYear().toString() === '2017'));
        }   
     } else 
    if (filterDate === '2016') {
      if (filterstatus === 'credit') {
        filterData = Object.assign(_.filter(testData, a => new Date(a.date).getFullYear().toString() === '2016' && a.type === 'Credit'));
      } else if (filterstatus === 'debit') { 
        filterData = Object.assign(_.filter(testData, a => new Date(a.date).getFullYear().toString() === '2016' && a.type === 'Debit'));
      } else {
        filterData = Object.assign(_.filter(testData, a => new Date(a.date).getFullYear().toString() === '2016'));
      } 
     } 
    

    return (

      <Container>
        <Card>
          <CardSection style={{ flex: 1, justifyContent: 'flex-start' }}>   

          <Picker 
                    mode='dialog'
                    style={{ maxHeight: 30, width: 200 }}
                    selectedValue={this.state.filterstatus}
                    onValueChange={this.onValChange.bind(this, 'filterstatus')}
          >
                    <Picker.Item label="Display All Items" value="all" />
                    <Picker.Item label="Invoice / Debits" value="debit" />
                    <Picker.Item label="PayMent / Credit" value="credit" />
                 
          </Picker>         
                        
          
          <Picker 
                    mode='dialog'
                    style={{ maxHeight: 30, width: 200 }}
                    selectedValue={this.state.filterDate}
                    onValueChange={this.onValChange.bind(this, 'filterDate')}
          >
                    <Picker.Item label="Date - ALL" value="all" />
                    <Picker.Item label="2017" value="2017" />
                    <Picker.Item label="2016" value="2016" />
                 
          </Picker>       
          </CardSection>
         
          <CardSection style={{ maxHeight: 150 }} />

          <CardSection style> 
            <Text style={{ flex: 1, textAlign: 'center', backgroundColor: '#D5D8DC' }}>Transaction #</Text>
            <Text style={{ flex: 1, textAlign: 'center', backgroundColor: '#D5D8DC' }}>Date</Text> 
            <Text style={{ flex: 1, textAlign: 'center', backgroundColor: '#D5D8DC' }}>Amount</Text> 
          </CardSection>   

          <FlatList 
          data={filterData}
          renderItem={({ item }) => <BillingItems testData={item} />}
          keyExtractor={(item) => item.tid}
          />
          
        </Card>    

      </Container>

    );
  }
}

const styles = StyleSheet.create({
  
  container: {
    borderRadius: 10    
  },  
  textStyle: {
    flex: 1,    
    textAlign: 'center'
  },
  
}); 

const mapStateToProps = state => {
  return { 
    testData: state.testData 
  }; 
};

export default connect(mapStateToProps, null)(HelloWorldApp); 

