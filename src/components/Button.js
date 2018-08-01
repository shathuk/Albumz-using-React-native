import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({openUrl}) => {
  const {buttonStyle,textStyle} = styles;

    return(
        <TouchableOpacity onPress={openUrl} style={buttonStyle}>
       <Text style={textStyle}> Buy Now </Text>
       </TouchableOpacity>

    );
};

const styles ={
    textStyle:{
        alignSelf: 'center',
        color : '#007aff',
        fontSize: 22,
        fontWeight: '600',
        paddingTop: 5,
        paddingBottom: 5

    },

    buttonStyle:{
        flex:1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
}
 export default Button;