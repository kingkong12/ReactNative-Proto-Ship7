import React, { Component } from 'react';
import { 
    Text, 
    View, 
    StyleSheet,
    FlatList,
    TouchableOpacity
  } from 'react-native';
import { connect } from 'react-redux';  
import { ButtonGroup } from 'react-native-elements';
import EmailItem from './EmailItem.js'; 

class Email extends Component {

  constructor(props) {
    super(props); 
    this.state = ({ 
      selectedIndex: 0, 
    });
  }

  onValChange = (key, value) => {
     this.setState({ [key]: value });    
  }
  

  render() {
    const { emailData } = this.props;   
    const buttons = ['US-Mailbox', 'Uk-MAilbox'];
    let FlatListData = Object.assign(emailData); 

    if (this.state.selectedIndex === 0) {
      FlatListData = emailData.filter((e) => e.country === 'USA'); 
    } else {
      FlatListData = emailData.filter((e) => e.country === 'UK'); 
    }

    return (
      <View style={styles.EmailContainer}>


        <View style={styles.emailHeader}>
          <ButtonGroup              
                buttons={buttons}
                containerStyle={{ flex: 1, maxWidth: 400 }}
                selectedIndex={this.state.selectedIndex}
                onPress={this.onValChange.bind(this, 'selectedIndex')}
          /> 
        </View>


        <View style={styles.EmailContent}>


          <View style={[styles.EmailitemStyle, styles.EamilItemHeader]}>

            <Text style={[styles.EamilItemHeaderText, styles.EamilItemHeaderTextElement1]}> 
            # 
            </Text>

            <Text style={[styles.EamilItemHeaderText, styles.EamilItemHeaderTextElement2]}> 
            Weight 
            </Text> 

            <Text style={[styles.EamilItemHeaderText2, styles.EamilItemHeaderTextElement3]}> 
            Selection 
            </Text>
            
          </View>


          <FlatList
                data={FlatListData}
                renderItem={({ item }) => <EmailItem data={item} />}
                keyExtractor={(item) => item.mailboxNo}
          />
          

        </View>  

        <View style={styles.FooterContent}>
            <TouchableOpacity>
              <View style={styles.shipSelecteditemButton}>
                <Text style={{fontWeight: 'bold', color: 'white',fontSize: 14 }}> Ship Selected Items </Text> 
              </View>
            </TouchableOpacity>
        </View>  

      </View>
    );
  }
}

const styles = StyleSheet.create({ 
  EmailContainer: {
    flex: 1, 
  },
  emailHeader: {
    flex: 1,    
    backgroundColor: '#cecdcb',
    maxHeight: 45,
    
  },
  EmailContent: {
    flex: 9, 
    flexDirection: 'column',
    justifyContent: 'flex-start',
   
  },
  EmailitemStyle: {
    borderWidth: 1,
    flexDirection: 'row',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    justifyContent: 'space-between',
    padding: 4,
    borderRadius: 5
  },
  EamilItemHeader: {
    backgroundColor: 'white'
  },
  EamilItemHeaderText: {
    flex: 2,
    fontWeight: 'bold'   
  },
  EamilItemHeaderText2: {
    flex: 1
  },
  EamilItemHeaderTextElement1: { 
    textAlign: 'left'
  },
  EamilItemHeaderTextElement2: {
    textAlign: 'center'
  },
  EamilItemHeaderTextElement3: {
    textAlign: 'right'
  },
  FooterContent:{
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  shipSelecteditemButton: {    
    backgroundColor: '#3C8DBC',
    padding: 20,
    margin: 5,
    borderRadius: 5
  }
  
});


const mapStateToProps = state => {
  return { 
    emailData: state.emailData 
  }; 
};

export default connect(mapStateToProps, null)(Email); 

