import { View } from 'react-native';
import Home from "./src/screen/Home"
import RoomScreen from './src/screen/RoomScreen';
export default function App() {
  return (
    <View style={{ flex: 1}}>
      <RoomScreen/>
    </View>  
  );
}

