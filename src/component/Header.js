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
            <TouchableOpacity
                  onPress={() => {
                    navigation.openDrawer();
                }}
                
            style={{flex:1,alignItems:"flex-start"}}
            >
            <Icon
            name='menu'
            color='#FFFFFF' 
            style={{fontSize:100 }}
            />            
            </TouchableOpacity>
            <Logo style={{flex:0.5}} height={100} width={100}/> 

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