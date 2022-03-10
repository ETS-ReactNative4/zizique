import React,{useEffect,useState,useContext} from "react";
import { Modal, StyleSheet,Text,TouchableOpacity,View,Image } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import PlaylistList from "./PlaylistList";
import Loading from "./Loading";
import ApiContext,{Api} from '../service/Axios'

const ModalInfo = (props) => {
    const {toggleVisibility,visibility,genre,joinRoom} = props
    const [isLoading,setIsLoading] = useState(true)
    const [playlists,setPlaylists] = useState([]);
    const context = useContext(ApiContext);

    useEffect(() => {
        context.GetGenrePlaylist(genre.id).then((response)=>{
            setIsLoading(!isLoading)
            setPlaylists(response.data.data.items)
        })
    },[]);
    

    return (
        <Modal animationType="slide" transparent={true} visible={visibility}>   
            <View style={styles.modalView}>
                <View style={styles.modalHeader}>
                    <Image source={{uri: `${genre.icons[0].url}`}} style={styles.images} />
                    <Text style={{color:"white",marginLeft:10}}>{genre.name}</Text>
                    <TouchableOpacity onPress={()=>{toggleVisibility()}} style={{marginLeft:"auto"}}>
                        <AntDesign name="close" size={30} color="white"  />
                    </TouchableOpacity>
                </View>
                {
                    !isLoading?<Text style={{color:"white"}}>Le Blind test sera composé des playlistes suivantes</Text>:null
                }
                {
                    isLoading?<Loading />:<PlaylistList playlists={playlists} />
                }
                {/* <ScrollView style={styles.modalScroll}>
                    <Text style={styles.modalText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc faucibus nibh eu mauris dapibus, facilisis egestas ligula posuere. Morbi bibendum mollis ultricies. Vestibulum et justo pellentesque, feugiat lacus nec, rhoncus massa. Proin leo libero, aliquet dictum est ac, tristique feugiat enim. Donec elementum arcu id velit placerat interdum.
                    </Text>
                </ScrollView> */}
                {
                    !isLoading?
                    <View style={styles.modalFooter}>
                        {
                            !joinRoom ?
                            <TouchableOpacity onPress={()=>{toggleVisibility()}} style={styles.btn}>
                                <Text style={styles.btnTxt}>Fermer</Text>
                            </TouchableOpacity> :
                            <TouchableOpacity 
                                onPress={()=>{
                                    toggleVisibility()
                                    joinRoom(genre.id)
                                }} 
                                style={styles.btn}
                            >
                                <Text style={styles.btnTxt}>Rejoindre la partie</Text>
                            </TouchableOpacity>
                        }
                    </View>:null
                    
                }
                
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalHeader:{
        flex:0.2,
        flexDirection:"row",
        alignItems:"center"
    },
    txtHeader:{
        color:"white",
        textAlign: "center",
        marginLeft:20
    },
    images:{
        width:70,
        height:70,
        borderRadius:50
    },
    modalScroll:{
        flex:0.6
    },
    modalFooter:{
        flex:0.2,
        justifyContent:"center"
    },
    btn:{
        backgroundColor:"#E43F6F",    
        alignItems: "center",
        borderRadius: 18,
        height:40,
        justifyContent:"center",
        marginBottom:10,
        marginTop:10
    },
    btnTxt:{
        color:"white"
    },
    modalView: {
        padding: 20,
        backgroundColor: "black",
        borderTopLeftRadius:29,
        borderTopRightRadius:29,
        justifyContent:"center",
        opacity:0.9,
        flex:1,
    },
    modalText:{
        color:"white",
        marginTop:30
    }
    
});

export default ModalInfo;