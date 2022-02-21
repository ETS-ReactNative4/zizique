import React from 'react';
import {View, StyleSheet,TextInput,Text} from "react-native";
import { Header } from '../component/Header';
import Progress from '../component/Progress';
import HistoricList from '../component/HistoriqueList';
import Victoire from "../../ImgSvg/victoire.svg";

class RoomScreen extends React.Component {
    
    state = {
        percent: 70,
        response:"",
        historique:[],
    }
    

    constructor(props) {
        super(props);
    }

    componentDidMount(){
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
            }
        ]})
    }

    render() {

        const onChangeResponse = (text) =>{
            this.setState({response:text});
        }

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
                            onChangeText={text => onChangeResponse(text)}
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
        flexDirection:"row"
    },
    histo_container:{
        flex:0.55,
        marginTop:20,
        backgroundColor:"rgba(0,0,0,.2)",
        borderTopLeftRadius:29,
        borderTopRightRadius:29,
        padding:5
    },
    classement_container:{
        flex:0.45,
        marginTop:20,
        backgroundColor:"rgba(0,0,0,.2)",
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
    title:{
        color:"white",
        fontSize:20
    },
    classement_container:{
        flexDirection:"row",
        alignItems:"flex-end",
        marginBottom:5,
        padding:10,
        justifyContent:"space-between"
    }

});


export default RoomScreen;