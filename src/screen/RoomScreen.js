import React from 'react';
import {View, StyleSheet,TextInput,Text} from "react-native";
import { Header } from '../component/Header';
import Progress from '../component/Progress';
import HistoricList from '../component/HistoriqueList';
import ClassementList from '../component/ClassementList';
import Victoire from "../../ImgSvg/victoire.svg";
import { MaterialIcons } from '@expo/vector-icons'; 
import {emitSocket,listenSocket} from '../service/Socket'
import ModalRoom from "../component/ModalRoom"
import { Audio } from 'expo-av';

class RoomScreen extends React.Component {
    
   
    constructor(props) {
        super(props);
        this.sound = new Audio.Sound();
        this.state = {
            percent: 0,
            response:"",
            historique:[],
            classement:[],
            asArtist:false,
            asSong:false,
        }
    }

    onPlaybackStatusUpdate = (status) =>{
        let percent = status.positionMillis*100/status.durationMillis
        this.setState({percent:percent})
        // console.log(this.state.response)
    }
    
    componentDidMount(){
        
       

        Audio.setAudioModeAsync({
            allowsRecordingIOS:false,
            interruptionModeIOS:Audio.INTERRUPTION_MODE_IOS_DUCK_OTHERS,
            playsInSilentModeIOS:true,
            interruptionModeAndroid:Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
            shouldDuckAndroid:true,
            staysActiveInBackground:true,
            playThroughEarpieceAndroid:true
        })

        this.sound.setOnPlaybackStatusUpdate(this.onPlaybackStatusUpdate);

        listenSocket('song',(song)=>{
            this.setState({percent:0})
            this.sound.loadAsync({uri:song.url}).then(()=>{
                this.sound.playAsync();
            });
            setTimeout(()=>{this.setState({historique:[...this.state.historique,song]})},30000)
        })

        listenSocket("asArtist",(asArtist)=>{this.setState({'asArtist':asArtist})})
        listenSocket("asSong",(asSong)=>{this.setState({'asArtist':asSong})})
        listenSocket("joinRoom",(player)=>{this.setState({'classement':[...this.state.classement,player]})})
            
    }

    onChangeResponse = (text) =>{
        this.setState({response:text});
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
                    <View style={styles.input_container}>
                        <TextInput
                            style={styles.input}
                            onChangeText={text => this.onChangeResponse(text)}
                            value={this.state.response}
                            placeholder="Entre ta réponse mon con"
                            onEndEditing={()=>{emitSocket('sendAnswer',text)}}
                        />
                    </View>
                    <View style={styles.room_body_container}>
                        <View style={styles.histo_container}>
                            <View style={styles.histo_header}>
                                <Text style={styles.title}>Historique</Text>
                                <MaterialIcons name="history" size={30} color="white" />  
                            </View>
                                <HistoricList historique={this.state.historique}/>
                        </View>
                        <View style={styles.classement_container}>
                            <View style={styles.classement_header}>
                                <Text style={styles.title}>Classement</Text>
                                <Victoire height={30} width={30} />
                            </View>
                            <ClassementList classement={this.state.classement} />
                        </View>
                    </View>
                </View>
                <ModalRoom />
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
    room_container:{
        flex:0.9,
        marginTop:30,
    },
    progress_container:{
        flex:0.05
    },
    input: {
        height: 40,
        padding: 10,
        backgroundColor:"white"
    },
    room_body_container:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    histo_container:{
        flex:.45,
        marginTop:20,
        backgroundColor:"rgba(0,0,0,.2)",
        borderTopLeftRadius:29,
        borderTopRightRadius:29,
        padding:5
    },
    classement_container:{
        flex:.45,
        marginTop:20,
        borderTopLeftRadius:29,
        borderTopRightRadius:29,
        padding:5
    },
    histo_header:{
        flexDirection:"row",
        alignItems:"flex-end",
        marginBottom:5,
        padding:10,
        justifyContent:"space-between"
    },
    classement_header:{
        flexDirection:"row",
        alignItems:"flex-end",
        marginBottom:5,
        padding:10,
        justifyContent:"space-between"
    },
    title:{
        color:"white",
        fontSize:20
    },

});


export default RoomScreen;