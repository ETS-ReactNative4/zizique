import React from 'react';
import {StyleSheet, Text, View, Image, useWindowDimensions} from 'react-native';

const CarrouselItem = (props)  => {
    const { width } = useWindowDimensions();
    const {item} = props
    return (
        <View style={{width:width-50}}>
            <Image source={item.image} style={styles.image} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width:"100%",
        height:"100%",
        resizeMode: 'contain',
    },
});

export default CarrouselItem