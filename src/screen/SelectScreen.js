import React from 'react';
import {View, StyleSheet,Text} from "react-native";
import SelectList from "../component/SelectList"
import { Header } from '../component/Header';
import {connectSocket} from "../service/Socket"
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid';

class SelectScreen extends React.Component {

    state = {
        genres: [],
    }

    constructor(props) {
        super(props);
        this.socket;
        
    }

    componentDidMount(){
        try{
            // getGenres()
            // .then(data=>{
            //     this.setState({genre:data.genres});
            //     console.log(data.genres)
            // })
            this.setState({
                genres:[
                    {
                        "href": "https://api.spotify.com/v1/browse/categories/toplists",
                        "icons": [
                          {
                            "height": 275,
                            "url": "https://t.scdn.co/media/derived/toplists_11160599e6a04ac5d6f2757f5511778f_0_0_275_275.jpg",
                            "width": 275
                          }
                        ],
                        "id": "toplists",
                        "name": "Les Tops"
                    },
                    {
                        "href": "https://api.spotify.com/v1/browse/categories/hiphop",
                        "icons": [
                          {
                            "height": 274,
                            "url": "https://t.scdn.co/media/original/hip-274_0a661854d61e29eace5fe63f73495e68_274x274.jpg",
                            "width": 274
                          }
                        ],
                        "id": "hiphop",
                        "name": "Hip-Hop"
                    },
                    {
                        "href": "https://api.spotify.com/v1/browse/categories/pop",
                        "icons": [
                          {
                            "height": 274,
                            "url": "https://t.scdn.co/media/derived/pop-274x274_447148649685019f5e2a03a39e78ba52_0_0_274_274.jpg",
                            "width": 274
                          }
                        ],
                        "id": "pop",
                        "name": "Pop"
                    },
                    {
                        "href": "https://api.spotify.com/v1/browse/categories/pop",
                        "icons": [
                          {
                            "height": 274,
                            "url": "https://t.scdn.co/media/derived/pop-274x274_447148649685019f5e2a03a39e78ba52_0_0_274_274.jpg",
                            "width": 274
                          }
                        ],
                        "id": "pop",
                        "name": "Pop"
                    }
                ]
            })

        }catch(e){
            console.log(e)
        }

        try{
          this.socket = connectSocket()
        }catch(e){
          console.log(e)
        }
    }

    _joinRoom = () =>{
      console.log(uuidv4())
      this.props.navigation.navigate('Room')
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header_container}>
                    <Header/>
                </View>
                <View style={styles.list_container}>
                    {
                        this.state.genres && this.state.genres.length > 0 ? <SelectList genres={this.state.genres} joinRoom={this._joinRoom} /> : <Text>Pas de genres</Text>
                    }
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFB100',
    marginTop:40,
    padding:10
  },
  header_container:{
      flex:0.1
  },
  list_container:{
      flex:0.8,
      marginTop:10
  }
});


export default SelectScreen;