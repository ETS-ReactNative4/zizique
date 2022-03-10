import React, {useEffect} from 'react';
import {FlatList,View,StyleSheet} from "react-native";
import HistoricItem from './HistoriqueItem';

const HistoricList = (props) =>{
    
    const {historique} = props;
    

    return (
        <View style={styles.container}>
            <FlatList
                data={historique}
                renderItem={({item}) => <HistoricItem item={item} />}
                keyExtractor={item => item.track.id.toString()}
                showsVerticalScrollIndicator={true}
                style={{flex:1}}
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

export default HistoricList