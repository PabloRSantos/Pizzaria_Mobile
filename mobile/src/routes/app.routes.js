import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"


import Login from "../pages/Login"
import Cadastro from "../pages/Cadastro"


const AppStack = createStackNavigator()


const AppRoutes = () => (
    <NavigationContainer>
            

         <AppStack.Navigator headerMode="none" screenOptions={{
                cardStyle: {
                    backgroundColor: "white"
                }
            }}>
            
            <AppStack.Screen name="Login" component={Login}/>
            <AppStack.Screen name="Cadastro" component={Cadastro}/>

        </AppStack.Navigator>
    </NavigationContainer>
)

export default AppRoutes