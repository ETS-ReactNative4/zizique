import React, {useState} from 'react';
import {FlatList,View,StyleSheet} from "react-native";
import HistoricItem from './HistoriqueItem';

const HistoricList = (props) =>{
    
    const {historique} = props;

    return (
        <View style={styles.container}>
            <FlatList
                data={historique}
                renderItem={({item}) => <HistoricItem item={item} />}
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

export default HistoricList