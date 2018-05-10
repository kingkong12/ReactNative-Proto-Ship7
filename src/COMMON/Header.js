import React from 'react';
import { Text, View } from 'react-native'; 

const Header = (props) => {
    const { textStyle, viewStyle } = style;
    return (
        <View style={viewStyle}> 
        <Text style={textStyle}> {props.headerText} </Text>
        </View> 
    );
};


const style = {
    viewStyle: {
        backgroundColor: '#85C1E9',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: 'red',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.9,
        elevation: 2,
        position: 'relative'
    }, 
    textStyle: {
        fontSize: 20,
    }
};
export { Header }; 

