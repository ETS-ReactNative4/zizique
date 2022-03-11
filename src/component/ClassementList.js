import React, {useState,useEffect} from 'react';
import {FlatList,View,StyleSheet} from "react-native";
import ClassementItem from './ClassementItem';

const ClassementList = (props) =>{
    
    const {classement,step} = props;

    
    useEffect(() => {
        classement.sort((a, b) => {
            return b.score - a.score;
        });

    },[classement]);
    

    return (
        <View style={styles.container}>
            <FlatList
                data={classement}
                renderItem={({item}) => <ClassementItem item={item} />}
                keyExtractor={item => item.id.toString()}
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

export default ClassementList