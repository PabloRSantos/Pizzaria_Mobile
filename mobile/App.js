import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import React from 'react';
import Routes from "./src/routes"
import {AuthProvider} from "./src/contexts/auth"

export default function App() {
  
  
  return (
    <AuthProvider>
      <StatusBar barStyle="light-content" backgroundColor="#008577" translucent />
      <Routes />
   </AuthProvider>
  );
}


