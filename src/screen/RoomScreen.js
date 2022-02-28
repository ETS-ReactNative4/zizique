import React from 'react';
import {View, StyleSheet,TextInput,Text} from "react-native";
import { Header } from '../component/Header';
import Progress from '../component/Progress';
import HistoricList from '../component/HistoriqueList';
import ClassementList from '../component/ClassementList';
import Victoire from "../../ImgSvg/victoire.svg";
import { Audio } from 'expo-av';

class RoomScreen extends React.Component {
    
   
    constructor(props) {
        super(props);
        this.sound = new Audio.Sound();
        this.state = {
            percent: 0,
            response:"",
            historique:[],
            classement:[]
        }
    }

    onPlaybackStatusUpdate = (status) =>{
        let percent = status.positionMillis*100/status.durationMillis
        this.setState({percent:percent})
        // console.log(this.state.response)
    }
    
    componentDidMount(){
        this.setState({percent:0})
        
        this.setState({historique:[...this.state.historique,
            {
                "id":1,
                "artist": "Asaf Avidan",
                "song":"Reckoning Song - Live Session",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b273bd411201368a4b6b3d4db4a4",
                        "width": 640
                    },
                ],
                "preview_url": "https://p.scdn.co/mp3-preview/b371d287a282fd7df9a27ee27fce7a3a1a3f7275?cid=774b29d4f13844c495f206cafdad9c86",
            },
            {
                "id":2,
                "artist": "Asaf Avidan",
                "song":"Reckoning Song - Live Session",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b273bd411201368a4b6b3d4db4a4",
                        "width": 640
                    },
                ],
                "preview_url": "https://p.scdn.co/mp3-preview/b371d287a282fd7df9a27ee27fce7a3a1a3f7275?cid=774b29d4f13844c495f206cafdad9c86",
            },
            {
                "id":3,
                "artist": "Asaf Avidan",
                "song":"Reckoning Song - Live Session",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b273bd411201368a4b6b3d4db4a4",
                        "width": 640
                    },
                ],
                "preview_url": "https://p.scdn.co/mp3-preview/b371d287a282fd7df9a27ee27fce7a3a1a3f7275?cid=774b29d4f13844c495f206cafdad9c86",
            },
            {
                "id":4,
                "artist": "Asaf Avidan",
                "song":"Reckoning Song - Live Session",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b273bd411201368a4b6b3d4db4a4",
                        "width": 640
                    },
                ],
                "preview_url": "https://p.scdn.co/mp3-preview/b371d287a282fd7df9a27ee27fce7a3a1a3f7275?cid=774b29d4f13844c495f206cafdad9c86",
            },
            {
                "id":5,
                "artist": "Asaf Avidan",
                "song":"Reckoning Song - Live Session",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b273bd411201368a4b6b3d4db4a4",
                        "width": 640
                    },
                ],
                "preview_url": "https://p.scdn.co/mp3-preview/b371d287a282fd7df9a27ee27fce7a3a1a3f7275?cid=774b29d4f13844c495f206cafdad9c86",
            }
        ]})

        this.setState({
            classement:[
                {
                    "id":1,
                    "nom": "Nathanaël Allard",
                    "image": 2,
                    "point":31
                },
                {
                    "id":2,
                    "nom": "Nathanaël Allard",
                    "image": 2,
                    "point":56
                },
                {
                    "id":3,
                    "nom": "Nathanaël Allard",
                    "image": 2,
                    "point":6
                },
                {
                    "id":4,
                    "nom": "Nathanaël Allard",
                    "image": 2,
                    "point":60
                },
            ]
        })
         
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

        this.sound.loadAsync(require('../../assets/bigard.mp3')).then(()=>{
            this.sound.playAsync();
        });

        // this.sound.loadAsync({uri:''}).then(()=>{
        //     this.sound.playAsync();
        // });
            
    }

    componentWillUnmount(){
        console.log('unmount')
        this.setState({percent:0,historique:[],classement:[]})
        this.sound.unloadAsync().then(()=>{});
        this.sound.stopAsync().then(()=>{})
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
                    </View>
                    <View style={styles.room_body_container}>
                        <View style={styles.histo_container}>
                            <View style={styles.histo_header}>
                                <Text style={styles.title}>Historique</Text>
                                <Victoire height={30} width={30} />
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