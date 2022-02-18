import React from 'react';
import {View, StyleSheet,Text} from "react-native";
import { Header } from '../component/Header';
import Progress from '../component/Progress';

class RoomScreen extends React.Component {
    
    state = {
        percent: 20,
    }
    

    constructor(props) {
        super(props);
    }

    componentDidMount(){
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header_container}>
                    <Header/>
                </View>
                <View style={styles.room_container}>
                    <View style={styles.progress_container}>
                        <Progress percent={this.state.percent}/>
                    </View>
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
      flex:0.2
  },
  room_container:{
      flex:0.8,
      marginTop:10
  },
  progress_container:{
      flex:0.05
  }
});


export default RoomScreen;