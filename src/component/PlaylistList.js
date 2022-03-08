import React,{useEffect} from 'react';
import {FlatList,View,StyleSheet} from "react-native";
import PlaylistItem from './PlaylistItem';

const PlaylistList = (props) =>{
    
    const {playlists} = props;


    return (
        <View style={styles.container}>
            <FlatList
                data={playlists}
                renderItem={({item}) => <PlaylistItem item={item} />}
                keyExtractor={item => item.id.toString()}
                showsVerticalScrollIndicator={true}
            />
        </View>
    )  
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:'center',
      justifyContent:'center',
    },
});

export default PlaylistList