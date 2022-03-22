import React, {useEffect} from 'react';
import {FlatList,View,StyleSheet} from "react-native";
import StatItem from './StatItem';

const StatList = (props) =>{
    
    const {stat} = props;    

    return (
        <View style={styles.container}>
            <FlatList
                data={stat}
                renderItem={({item}) => <StatItem item={item} />}
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

export default StatList