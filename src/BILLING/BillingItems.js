import React, { Component } from 'react';
import { Text, LayoutAnimation, TouchableWithoutFeedback, NativeModules, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { CardSection } from '../COMMON/index.js';
import { ActionBillingId } from '../ACTIONS/Act_Index.js'; 

const { UIManager } = NativeModules; 
UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);

class BillingItems extends Component {
  constructor(props) {
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
      console.log(this.props.testData.description);
      return (
        <CardSection>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={{ flex: 1, flexDirection: 'column', textAlign: 'center', marginLeft: 10, fontWeight: '800', letterSpacing: 2 }}>TYpe </Text>
            <Text style={{ flex: 1, flexDirection: 'column', marginLeft: 10 }}>{this.props.testData.type}</Text> 
          </View>
          <View style={{flex: 1, flexDirection: 'row' }}>
            <Text style={{ flex: 1, flexDirection: 'column', textAlign: 'center', marginLeft: 10, fontWeight: '800', letterSpacing: 2 }}>Description </Text>
            <Text style={{ flex: 1, flexDirection: 'column', marginLeft: 10 }}>{this.props.testData.description}</Text> 
          </View> 

        </CardSection>  
      );
    }
  }


  render() {
    const { tid, date, amount } = this.props.testData;

    return (
      <TouchableWithoutFeedback onPress={() => this.props.ActionBillingId(tid)}>
      <View>
        <CardSection>
          <Text style={{ flex: 1, textAlign: 'center', fontWeight: '800' }}>#{tid}</Text>
          <Text style={{ flex: 1, textAlign: 'center', fontWeight: '800' }}>{date}</Text> 
          <Text style={{ flex: 1, textAlign: 'center', fontWeight: '800'}}>{amount}</Text>
          <Icon name="angle-double-down" size={10} />        
        </CardSection>
        {this.renderDescription()}
      </View>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = (state, ownProps) => {  
  const expanded = state.billing.selectedBillingId === ownProps.testData.tid; 
  return { expanded };
};

export default connect(mapStateToProps, { ActionBillingId })(BillingItems); 
