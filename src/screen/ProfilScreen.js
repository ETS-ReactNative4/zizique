import React,{useState} from 'react'
import { StyleSheet, Text, View,TouchableOpacity ,TextInput } from 'react-native';
import Avatar1 from '../../ImgSvg/avatar1.svg'
import Avatar2 from '../../ImgSvg/avatar2.svg'
import Avatar3 from '../../ImgSvg/avatar3.svg'
import Header from "../component/Header"

const ProfilScreen = (props) => {
    const {storeConnexion} = props; 
    const [user,setUser] = useState({})

    useEffect(() => {
      
    },[]);

    return(
        <View style={styles.container}>
            <Header />
            <View style={styles.header}>
                {
                    item.picture===1?<Avatar1 height={30} width={30}/>
                    :null
                }
                {
                    item.picture===2?<Avatar2 height={30} width={30}/>
                    :null
                }
                {
                    item.picture===3?<Avatar3 height={30} width={30}/>
                    :null
                }
          </View>
        
    
        </View>
    )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFB100',
    alignItems: 'center',
  },
  header:{

  }
  
});
export default ProfilScreen
