import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, LayoutAnimation, NativeModules } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CardSection } from '../COMMON/index.js';
import { ActionHistoryId } from '../ACTIONS/Act_Index.js';


const { UIManager } = NativeModules; 
UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);

class ShHistoryItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedId: null, 
    };
}  

componentDidUpdate() {    
  LayoutAnimation.easeInEaseOut();
}

renderDescription() {  
    
  const { expanded } = this.props; 
  
  if (expanded) {        
    return (
      <View style={{flexDirection: 'column', justifyContent: 'flex-start'}}>
        
        <Text style={{flex: 1 }}> Arrived At: {this.props.testData.arrivedat} </Text>  
        <Text style={{flex: 1 }}> Sender: {this.props.testData.sender} </Text> 
        <Text style={{flex: 1 }}> Weight: {this.props.testData.dimensions.height} X 
        {this.props.testData.dimensions.width} X {this.props.testData.dimensions.length}        
        </Text > 
        <Text style={{flex: 1 }}> Weight: {this.props.testData.dimensions.weight}Lbs </Text>
      </View>  
    );
  }
}


  render() {   
   const { oid, arrivedat, status, items } = this.props.testData;   
    return (
      <TouchableWithoutFeedback onPress={() => this.props.ActionHistoryId(oid)}>
        <View>
          <CardSection>
            <Text style={{ flex: 1, textAlign: 'center', fontWeight: '800' }}>#{oid}</Text> 
            <Text style={{ flex: 1, textAlign: 'center', fontWeight: '800' }}>{arrivedat}</Text>
            <Text style={{ flex: 1, textAlign: 'center', fontWeight: '800' }}>{status}</Text>   
            <Text style={{ flex: 1, textAlign: 'center', fontWeight: '800', justifyContent: 'space-around' }}>
            {items}
            <Icon name="angle-double-down" size={10} />    
            </Text>          
            
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = (state, ownProps) => {    
  const expanded = state.history.selectedHistoryId === ownProps.testData.oid;   
  return { expanded };
};

export default connect(mapStateToProps, { ActionHistoryId })(ShHistoryItem);  
