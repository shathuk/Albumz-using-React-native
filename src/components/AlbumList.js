import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetails from './AlbumDetails';

class Albumlist extends Component {
    state = { albums: [] };
 componentWillMount(){
     axios.get('https://rallycoding.herokuapp.com/api/music_albums')
     .then(Response => this.setState({ albums : Response.data }));
 }

 renderAlbums(){
     return this.state.albums.map(details => 
     <AlbumDetails key={details.title} data={details} />
    );
 }

    render(){
        
        return(
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>    
        );
    }
}

export default Albumlist;