import React, { Component } from 'react';
import { 
    Text,
    StyleSheet,
    View,
    CheckBox,
    TouchableOpacity,
    Modal,
    Image
 } from 'react-native';
 import Icon from 'react-native-vector-icons/FontAwesome';

export default class EmailItem extends Component {

  state = {
      visibleModal: null,       
  }
  
  
  renderModalContent = () => (
    <View style={styles.modalContainer}>    
        
        <View style={styles.modalContentHeader}>

            <View style={{ flex: 3, justifyContent: 'flex-end', marginLeft: 10 }}> 
                <Text style={{ fontWeight: '800' }}> 
                    Package Arrived at {this.props.data.ArrivedAt}  
                </Text> 
            </View>

            <View style={{flex: 1, alignItems: 'flex-end', marginRight: 10 }}>  
                <Icon name="times" size={30} onPress={() => this.setState({ visibleModal: null })} />     
            </View>       
        </View>      

        <View style={styles.ImageContainer}>  
            <View style={styles.ImageTextContainerStyle}>
                <Text style={styles.ImageTextStytle}> Images of your packages </Text> 
            </View>    

            <View style={styles.ImageStyleContainer}>

                <View style={styles.ImageStyle}>
                    <Image
                        source={{ 
                            height: 350,
                            width: 550,
                            uri: 'http://hdwallpapersrocks.com/wp-content/uploads/2018/01/Beach-nature-beauty-fabulous-mobile-wallpapers.jpg'}}
                        style={{borderRadius: 10 }}    
                    />
                </View>   

            </View>          
        </View>

        <View style={styles.PackageContent}>

            <View style={{ flex: 1, flexDirection: 'row' }} >  
                <View style={{ flex: 1, alignItems: 'center' }}>            
                    <Text style={styles.PackageContentText}>
                        Package Content
                    </Text>
                </View>    

                <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                        {Object.values(this.props.data.contents).map((e) => <Text style={styles.PackageContentText}>{e}</Text>)}
                </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row' }} >
                <View style={{ flex: 1, alignItems: 'center' }}>            
                    <Text style={styles.PackageContentText}>
                        Package Weigth and Dimensions  
                    </Text>
                </View> 

                <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                        <Text style={styles.PackageContentText} >{this.props.data.Weight}Lbs</Text> 
                        <Text style={styles.PackageContentText} >{this.props.data.Length}X{this.props.data.Widht}X{this.props.data.Height} inches</Text> 
                </View>
                
            </View>
                            
            <View style={{ flex: 1, flexDirection: 'row' }} >
                <View style={{ flex: 1, alignItems: 'center' }}>            
                    <Text style={styles.PackageContentText}>
                        Other Package Attribute  
                    </Text>
                </View> 

                <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                    <Text style={styles.PackageContentText}> Sender:
                        <Text> {this.props.data.Sender}
                        </Text>
                    </Text>
                </View>
                
            </View>    

        </View>    
  
    </View>    
  );
  render() {
    
    return (
      <View style={styles.EmailitemStyle}>

        <View style={styles.EamilItemHeaderTextElement1}>

                <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
                    {this.props.data.mailboxNo}
                </Text>
             
                <TouchableOpacity onPress={() => this.setState({ visibleModal: 1 })}>
                    <View style={styles.detailButtonStyling}>
                        <Icon name="edit" size={18} /> 
                        <Text>Details</Text>
                    </View>
                </TouchableOpacity>
        </View>

        <View style={styles.EamilItemHeaderTextElement2}>

            <View style={styles.WeightSectionButtonStyling}>

                <Text style={styles.WeightSectionButtonTextStyling}>
                    {this.props.data.Weight} LBS
                </Text>  

            </View>

            <Text style={styles.WeightDimensionStyle}>
                {this.props.data.Length}X{this.props.data.Widht}X{this.props.data.Height}
            </Text>  
            
        </View>  

        <View style={styles.EamilItemHeaderTextElement3}> 
            <CheckBox />    
        </View> 

         <Modal     
            visible={this.state.visibleModal === 1}
            animationType="slide"
            transparent
            presentationStyle="overFullScreen"
            onRequestClose={() => {
                this.setState({ visibleModal: null });
            }}
         >
            {this.renderModalContent()}
         </Modal>        
      </View>  
    );
  }
}

const styles = StyleSheet.create({ 
    EmailitemStyle: {
        flex: 1,
        borderWidth: 1,
        flexDirection: 'row',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        justifyContent: 'space-around',
        padding: 4,
        borderRadius: 5,
        backgroundColor: 'white'
      },
      EamilItemHeaderTextElement1: { 
        flex: 2,   
        flexDirection: 'column',
      },
      EamilItemHeaderTextElement2: {
        flex: 2,
        alignItems: 'center',
      },
      EamilItemHeaderTextElement3: {
        flex: 1,   
        alignItems: 'flex-end',
      },
      detailButtonStyling: {
          backgroundColor: '#cecdcb',         
          marginLeft: 10,
          marginRight: 10,
          flexDirection: 'row',
          padding: 3,
          borderRadius: 6,
          justifyContent: 'space-around',
          alignItems: 'center',
          
      },
      WeightSectionButtonStyling: {
          flexDirection: 'row',
          backgroundColor: '#0dc4e0',
          width: 60,
          padding: 2, 
          borderRadius: 6,
          margin: 2,
          justifyContent: 'center'
      },
      WeightSectionButtonTextStyling: {
          color: 'white',
          fontWeight: 'bold'
      },
      WeightDimensionStyle: {
          color: 'green'
      },
      modalContainer: {
          flex: 1,
          justifyContent: 'flex-start',
          padding: 10,       
          backgroundColor: '#D5D8DC',                      
      },
      modalContentHeader: {
        flex: 1,
        backgroundColor: 'white',  
        alignItems: 'center',
        flexDirection: 'row',       
        borderTopLeftRadius: 10, 
        borderTopRightRadius: 10,        
      },
      ImageContainer: {
        flex: 5,   
      }, 
      PackageContent: {
          flex: 3, 
          backgroundColor: 'white', 
          padding: 4,            
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10
      },
      ImageTextContainerStyle: {
          flex: 1, 
          flexDirection:'row',
          backgroundColor: 'white',
          justifyContent: 'center',      
      }, 
      ImageTextStytle: {
        fontSize: 15,
        fontWeight: '800'
      },
      ImageStyleContainer: {
          flex: 8,
          backgroundColor: 'white',
          padding: 5
      },
      ImageStyle: {
        flex: 1,  
        backgroundColor: 'white',
        borderRadius: 10
      },
      PackageContentText: {
        fontWeight: '800'
      }

});
