import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';


const App = () =>(

  <View style={{flex: 1}}>
    <Header headerText={'Album'} />
    <AlbumList />
  </View>  
  );


export default App;