import { View } from 'react-native';
import Home from "./src/screen/Home"
import SelectScreen from './src/screen/SelectScreen';
export default function App() {
  return (
    <View style={{ flex: 1}}>
      <SelectScreen/>
    </View>  
  );
}

