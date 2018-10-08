import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { 
        Container, Card, CardItem,  
        Picker
        } from 'native-base'; 
        import _ from 'lodash';  
import ShHistoryItem from './ShHistoryItem.js'; 

class ShipmentHistory extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      picker1Value: 'all',
      picker2Value: 'all'
    };     
  }
  
  onValChange = (key, value) => {         
    this.setState({ [key]: value });    
    }   

  render() {           
    const { testDataH } = this.props; 
    var filterData = Object.assign(testDataH);    

    if (this.state.picker2Value === 'all') {
      if (this.state.picker1Value === 'PFS') {
        filterData = testDataH.filter((e) => e.status === 'NOt YET SHIPPED'); 
      } else 
      if (this.state.picker1Value === 'SO') {
        filterData = testDataH.filter((e) => e.status === 'SHIPPED'); 
      } 
    } else 
    if (this.state.picker2Value === '2017') {      
      if (this.state.picker1Value === 'PFS') {
        filterData = Object.assign(_.filter(testDataH, a => new Date(a.date).getFullYear().toString() === '2017' && a.status === 'NOt YET SHIPPED'));
      } else 
      if (this.state.picker1Value === 'SO') {
        filterData = Object.assign(_.filter(testDataH, a => new Date(a.date).getFullYear().toString() === '2017' && a.status === 'SHIPPED'));
      } else {
        filterData = Object.assign(_.filter(testDataH, a => new Date(a.date).getFullYear().toString() === '2017'));
      }
    } else 
    if (this.state.picker2Value === '2016') {
      if (this.state.picker1Value === 'PFS') {
        filterData = Object.assign(_.filter(testDataH, a => new Date(a.date).getFullYear().toString() === '2016' && a.status === 'NOt YET SHIPPED'));
      } else 
      if (this.state.picker1Value === 'SO') {
        filterData = Object.assign(_.filter(testDataH, a => new Date(a.date).getFullYear().toString() === '2016' && a.status === 'SHIPPED'));
      } else {
        filterData = Object.assign(_.filter(testDataH, a => new Date(a.date).getFullYear().toString() === '2016'));
      }
    }

    return (

      <Container style={styles.container}>

        <Card style={{ flex: 1, }}> 
            
            <CardItem style={{ flex: 1, justifyContent: 'center' }}> 
              <Text> Shipment History </Text> 
            </CardItem> 
             
            <CardItem style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-around' }}>
              <View style={{ flex: 1 }}>

                <Picker 
                              mode='dialog'
                              style={{ flex: 1 }}    
                              selectedValue={this.state.picker1Value}
                              onValueChange={this.onValChange.bind(this, 'picker1Value')}
                >
                              
                              
                              <Picker.Item label="Display All " value="all" />
                              <Picker.Item label="Preapring For Shipment" value="PFS" />
                              <Picker.Item label="Shipped Out" value="SO" />
                 
                </Picker>

              </View>


              <View style={{ flex: 1 }}>

                <Picker 
                              mode='dialog'
                              style={{ flex: 1 }}     
                              selectedValue={this.state.picker2Value}
                              onValueChange={this.onValChange.bind(this, 'picker2Value')}                       
                >
                              <Picker.Item label="Date - All" value="all" />
                              <Picker.Item label="2017" value="2017" />
                              <Picker.Item label="2016" value="2016" />
                 
                </Picker> 

              </View>
            </CardItem>   
        </Card> 
         
                
        <Card style={{ flex: 7 }}> 
          <CardItem borderd style={{ marginTop: 0.5 }}>   
              <Text style={{ flex: 1, textAlign: 'center', backgroundColor: '#D5D8DC' }}>Order #</Text>              
              <Text style={{ flex: 1, textAlign: 'center', backgroundColor: '#D5D8DC' }}>Date</Text> 
              <Text style={{ flex: 1, textAlign: 'center', backgroundColor: '#D5D8DC' }}>Status</Text> 
              <Text style={{ flex: 1, textAlign: 'center', backgroundColor: '#D5D8DC' }}>Items</Text> 
          </CardItem>

          <FlatList 
          data={filterData}
          renderItem={({ item }) => <ShHistoryItem testData={item} />}
          keyExtractor={(item) => item.oid}
          />
          
      </Card>
      </Container> 
    );  
}
} 

const styles = StyleSheet.create({

  container: {
    padding: 10
  },   
  pageTopHeader: {
    flex: 1, 
    backgroundColor: '#B0E2FF'
  },
  pageTopHeaderTextStyle1: {
    fontFamily: 'serif',
    fontSize: 30, 
    fontWeight: '800',     
  },
  pageTopHeaderTextStyle2: {
    fontSize: 20,
    fontWeight: '200'
  },
  pageBody: {
    flex: 8,
    flexDirection: 'column',
    backgroundColor: '#458B74'
  },
  

});

const mapStateToProps = state => {
  return { 
    testDataH: state.testDataH 
  }; 
};

export default connect(mapStateToProps, null)(ShipmentHistory); 


/*
tmp data 
bg color : backgroundColor: '#B0E2FF' , 
            backgroundColor: '#458B74'
*/
