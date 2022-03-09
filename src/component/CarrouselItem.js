import React from 'react';
import {StyleSheet, Text, View, Image, useWindowDimensions} from 'react-native';

const CarrouselItem = (props)  => {
    const { width } = useWindowDimensions();
    const {item} = props
    return (
        <View style={[styles.container, { width}]}>
            <Image source={item.image} style={[ styles.image, { width} ]} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        padding:100,
        resizeMode: 'contain',
    },
});

export default CarrouselItem