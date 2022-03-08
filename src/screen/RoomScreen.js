import React from 'react';
import {View, StyleSheet,TextInput,Text,TouchableOpacity} from "react-native";
import { Header } from '../component/Header';
import Progress from '../component/Progress';
import HistoricList from '../component/HistoriqueList';
import ClassementList from '../component/ClassementList';
import Victoire from "../../ImgSvg/victoire.svg";
import { MaterialIcons } from '@expo/vector-icons'; 
import {emitSocket,listenSocket} from '../service/Socket'
import ModalRoom from "../component/ModalRoom"
import { Audio } from 'expo-av';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

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
            modalVisibility:false,
            isGameFinish:false,
            isGameLoading:true,
            isPlaying:false,
        }
    }

    onPlaybackStatusUpdate = (status) =>{
        let percent = status.positionMillis*100/status.durationMillis
        this.setState({percent:percent})
    }
    
    componentDidMount(){
        
        listenSocket("socketID",)
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
            if(this.state.isPlaying){
                this.sound.unloadAsync()
            }
            this.setState({percent:0})
            this.setState({modalVisibility:false,isLoading:false})
            this.sound.loadAsync({uri:song.url}).then(()=>{
                this.sound.playAsync();
                this.setState({isPlaying:true})
            });
            setTimeout(()=>{this.setState({historique:[...this.state.historique,song]})},30000)
        })

        listenSocket("asArtist",(asArtist)=>{this.setState({'asArtist':asArtist})})
        listenSocket("asSong",(asSong)=>{this.setState({'asArtist':asSong})})
        listenSocket("finish",()=>{this.setState({modalVisibility:true,isFinish:true})})
        listenSocket("someoneLeaved",(player)=>{
            this.setState({'classement':[...this.state.classement,player]})
        })
        listenSocket("someoneJoined",(player)=>{
            this.setState({'classement':[...this.state.classement,player]})
        })

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
                        />
                        <TouchableOpacity
                            style={styles.send}
                            onPress={()=>{emitSocket('sendAnswer',this.state.response)}}
                        >
                            <MaterialCommunityIcons name="send" size={20} color="white" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.answer_container}>
                        {
                            this.state.asArtist ?
                            <Text style={{color:"white",padding:10,backgroundColor:"#E43F6F",marginHorizontal:10}}>Artiste</Text>:null
                        }
                        {
                            this.state.asSong ?
                            <Text style={{color:"white",padding:10,backgroundColor:"#5BC9D7",marginHorizontal:10}}>Musique</Text>:null
                        }
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
                <ModalRoom isLoading={this.state.isGameLoading} isFinish={this.state.isGameFinish} visibility={this.state.modalVisibility}/>
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
        flex:0.1,
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
        justifyContent:"space-between",
        marginTop:30
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
    answer_container:{
        flexDirection:"row",
    },
    send:{
        backgroundColor:"#E43F6F",
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        width:40,
        height:40,
        position:"absolute",
        right:0,
        bottom:"-75%"
    },
    input_container:{
        position:"relative"
    }

});


export default RoomScreen;