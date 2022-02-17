import React, {useState} from 'react';
import {FlatList,View,StyleSheet} from "react-native";
import GenreItem from "./GenreItem"

const SelectList = (props) =>{
    
    const {genres} = props;

    return (
        <View style={styles.container}>
            <FlatList
                data={genres}
                numColumns={2}
                renderItem={({item}) => <GenreItem genre={item} />}
                keyExtractor={item => item.id.toString()}
                onEndReachedThreshold={0.5}
                showsVerticalScrollIndicator={false}

                // onEndReached={() => {
                //     if (page < totalPages) {
                //         _loadFilms();
                //     }
                // }}
            />
        </View>
    )  
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default SelectList