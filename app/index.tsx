import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import {  StyleSheet,  View, TextInput,Text, TouchableOpacity, Alert   } from 'react-native';
import {useState} from "react"
import { Link, router, useNavigation} from 'expo-router';
import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  
 const [name, setName] = useState("")
  const [pw, setPw] = useState("")
 const [view, setView] = useState(true)
const navigation = useNavigation()
const hello =()=>{
    console.log("hello")
    router.navigate("/welcome")
} 
const credentials =()=>{
  if(name && pw){
    if(name == "ram" && pw == "password@123" ){
   hello()
    }else{
      Alert.alert("unsucessful")
    }
  }else  {
    Alert.alert("credentials not written")
  }

 }
  return (
  <View style={{margin:30}}>
<View style={{padding:20,}}>
  <Text>
    Name
  </Text>
  <View style={{margin:10, backgroundColor:"grey"}}>
    <TextInput value={name} onChangeText={(x)=>setName(x)} />
  </View>
  
</View>
<View  >
  <Text>
    Password
  </Text>
  <View style={{margin:10, backgroundColor:"grey"}}>
    <TextInput value={pw} onChangeText={(x)=>setPw(x)} secureTextEntry={view}  />
  </View>
  
</View>
<View style={{margin:10, backgroundColor:"grey", borderRadius:20, height:50, alignItems:"center", justifyContent:"center", flexDirection:"row"}}>
  <TouchableOpacity onPress={credentials} style={{alignItems:"center"}}>
    <Text>
      submit
    </Text>
  </TouchableOpacity>
</View>
  </View>
  );






    
}
