import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

export default class DisplayCost extends Component {
  constructor(props) {
      super(props);
      this.state = {
            tableHead: ['ORIGIN', 'DESTINATION', 'WEIGHT', 'DIMENSIONS'],
            tableData: [
                [this.props.originState, this.props.destinationState, this.props.weightState, `${this.props.lengthState}X${this.props.widthSate}X${this.props.heightState}`]                
            ]
      };
  }  
  

  render() {
    const state = this.state;  
    return (
       <View style={styles.containerStyle}> 

        <View> 
           <Table borderStyle={{ borderWidth: 3, borderColor: 'transparent' }}>
            <Row data={state.tableHead} style={styles.head} textStyle={styles.text} />
            <Rows data={state.tableData} textStyle={styles.text} />
                
          </Table>
        </View>


        <View>
            <Text> LIST Container from API Calls </Text> 
        </View>           
       </View>    
    );
  }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,        
        padding: 12,
        paddingTop: 30,
        margin: 5,
        backgroundColor: '#ffffff',
        borderRadius: 10
    },
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { borderTopLeftRadius: 10, borderTopRightRadius: 10, height: 40, backgroundColor: 'transparent', borderBottomWidth: 3 },
    text: { margin: 6 }
}); 
