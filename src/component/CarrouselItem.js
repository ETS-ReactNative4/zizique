import React from 'react';
import { StyleSheet, View, Image, useWindowDimensions } from 'react-native';

const CarrouselItem = (props) => {
    const { item } = props
    return (
        <View style={{ justifyContent: "space-around", borderWidth: 1 }}>
            <Image source={item.image} style={styles.image} />
        </View>
    );
}

const styles = StyleSheet.create({

    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
});

export default CarrouselItem