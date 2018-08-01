//import libraries for making components
import React from 'react';
import { Text, View } from 'react-native';

//make a component
const Header = (props) => {
    const {textStyle, viewStyle} = styles;
    return (
        <View style={viewStyle}>
           <Text style={textStyle}>{props.headerText}</Text>
        </View>   
    );
};
//Stylingg
const styles = {
    viewStyle:{
        backgroundColor:'#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        padding: 15,
        shadowColor: '#000',
        shadowOffset:{width:0 , height:2},
        shadowOpacity:0.5,
        elevation: 2,
        position:'relative'
        
    },
    textStyle: {
        fontSize:40,
        color: '#000',
        fontFamily:'Lobster'

                
    }
}


//make a component available to other parts of App
export default Header;