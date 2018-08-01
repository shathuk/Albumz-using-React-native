import React from 'react';
import {Text,View,Image,Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetails = ({data}) => {
    const  {title,
            artist,
            thumbnail_image,
            image,
             url
           } = data;

    const {thambnailStyle,
           headerContentStyles,
           thumbnailContainerStyle,
           headerTextStyle,
           secondTextStyle,
           imageStyle} = styles;
    return(
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image 
                    style={thambnailStyle}
                    source={{uri:thumbnail_image}} 
                    />
                </View>
                      <View style={headerContentStyles}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text style={secondTextStyle}>{artist}</Text>
                      </View>
             </CardSection> 
               
                 <CardSection>
                 <Image 
                 style={ imageStyle}
                 source={{uri : image}} 
                 />
                 </CardSection>   

                 <CardSection>
                     <Button openUrl = {() => Linking.openURL(url)} />
                 </CardSection>   
        </Card>
    );
};

const styles = {
    headerContentStyles : {
        justifyContent: 'space-around',
        flexDirection:'column'
    },
    headerTextStyle: {
       fontSize: 20,
       fontWeight: 'bold'
    },
    secondTextStyle:{
        fontSize:15,
        fontWeight:'bold'

    },
    thambnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle:{
        height: 300,
        flex:1,
        width: null
    }
};

export default AlbumDetails;