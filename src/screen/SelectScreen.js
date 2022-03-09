import React from 'react';
import {View, StyleSheet,ActivityIndicator} from "react-native";
import SelectList from "../component/SelectList"
import { Header } from '../component/Header';
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid';
import {emitSocket} from '../service/Socket'
import {observer,inject} from 'mobx-react'
import ApiContext,{Api} from '../service/Axios'
import Loading from '../component/Loading';
class SelectScreen extends React.Component {

    static contextType = ApiContext

 
    constructor(props) {
        super(props);  
        this.state = {
            genres :[]
        }      
    }

    componentDidMount(){
        try{
            this.context.GetGenre().then((res)=>{
                this.setState({genres:res.data})
            })
        }catch(e){
            console.log(e)
        }        
    }

    _joinRoom = (genre) =>{
      try{
        emitSocket("joinRoom",{genre:genre,user:{username:this.props.storeConnexion.getLogin(),profilPic:this.props.storeConnexion.getProfilPicture()}})
        this.props.navigation.navigate('Room')
      }catch(e){
        console.log(e)
      }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header_container}>
                    <Header/>
                </View>
                <View style={styles.list_container}>
                    {
                        this.state.genres && this.state.genres.length > 0 ? <SelectList genres={this.state.genres} joinRoom={this._joinRoom} /> : 
                        <Loading />
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


// export default SelectScreen;
export default inject('storeConnexion')(observer(SelectScreen))