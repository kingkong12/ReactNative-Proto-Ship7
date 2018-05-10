import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ lable, value, onChangeText, placeholder, secureTextEntry }) => {
    const { inputStyle, lableStyle, constainerStyle } = styles; 

    return (
        <View style={constainerStyle}>
            <Text style={lableStyle}>{lable}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                style={inputStyle}
                value={value} 
                onChangeText={onChangeText}                          
            />
        </View>    
    ); 
};

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5, 
        paddingLeft: 5,
        fontSize: 18, 
        lineHeight: 23,
        flex: 2
    },
    lableStyle: {
        fontSize: 18, 
        paddingLeft: 20, 
        flex: 1
    },
    constainerStyle: {
        height: 80, 
        flex: 1,
        flexDirection: 'row',  
        alignItems: 'center'
    }
};

export { Input };
