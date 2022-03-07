import React,{useRef} from 'react';
import {View,StyleSheet,Image,Text,TouchableOpacity} from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import Logo from "../../ImgSvg/Logo.svg";
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';

export const Header = () => {
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Logo  height={100} width={100}/> 
            <TouchableOpacity
                onPress={() => {
                    navigation.push("Room")           
                    navigation.openDrawer();
                }}
                style={{marginLeft:"auto"}}
            >
                <Icon
                    name='menu'
                    color='#FFFFFF' 
                    style={{fontSize:100 }}
                />            
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:"row",
        alignItems:"center",
    }
})