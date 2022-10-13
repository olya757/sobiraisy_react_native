import { StyleSheet, View, Text } from 'react-native';
import { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { gStyle } from './styles/style';

const fonts = () => Font.loadAsync({
  'robotoslab-bold': require('./assets/fonts/RobotoSlab-Bold.ttf'),
  'robotoslab-light': require('./assets/fonts/RobotoSlab-Light.ttf')
});

export default function App() {
  const [font, setFont] = useState(false);

  if(font){
    return (
      <View>    
        <Text style={gStyle.title}>Test some text Test some text Test some text</Text>
      </View>
    );
  }
  else
  {
    return (
      <AppLoading onError={(error)=> console.log(error)} startAsync={fonts} onFinish={()=> setFont(true)}/>
    );
  }  
}

const styles = StyleSheet.create({

});
