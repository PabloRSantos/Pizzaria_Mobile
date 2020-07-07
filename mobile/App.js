import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, useFonts } from "@expo-google-fonts/roboto"
import { AppLoading } from "expo"
import Routes from "./src/routes"
import {AuthProvider} from "./src/contexts/auth"

export default function App() {
  

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  })
  
 if(!fontsLoaded){
    return <AppLoading />
  }
  
  return (
    <AuthProvider>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <Routes />
   </AuthProvider>
  );
}





  /*
 const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold
  })
  
 if(!fontsLoaded){
    return <AppLoading />
  }
  //expo install expo-font @expo-google-fonts/ubuntu @expo-google-fonts/roboto
  
  return (
   <> 
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <Routes />
    </>
  )

}
*/

