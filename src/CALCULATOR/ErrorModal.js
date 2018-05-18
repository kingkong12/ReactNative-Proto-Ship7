import React from 'react';
import {
  StyleSheet,
  Text,  
  Button,
  Image
} from 'react-native';
import {Card,CardItem,View} from 'native-base';
import { Actions } from 'react-native-router-flux';
import Modal from './BaseModal';

const ErrorModal = () => (
  <Modal hideClose>
    <Card style={styles.imageWrapper}>
      <CardItem cardBody>
        <Image    
          style={styles.images}
          source={require('./volumetric-02.jpg')}
        />
      </CardItem>  
      </Card>
    
  </Modal>
);

const styles = StyleSheet.create({
  imageWrapper: {
    flex: 1,
    alignItems: 'stretch',
    elevation: 3 
  },
  image: {
    flex: 1,
    padding: 20
  }
});


export default ErrorModal;
