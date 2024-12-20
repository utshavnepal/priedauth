import {  StyleSheet,  View, TextInput,Text, TouchableOpacity, Alert   } from 'react-native';
import {useState} from "react"
import { Link, router, useNavigation} from 'expo-router';

export default function Login() {
  const [name, setName] = useState("")
  const [pw, setPw] = useState("")
 const [view, setView] = useState(true)
const navigation = useNavigation()
 const credentials =()=>{
  if(name && pw){
    if(name == "ram" && pw == "password@123" ){
   
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

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
