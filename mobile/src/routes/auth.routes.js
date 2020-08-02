import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"



import Home from "../pages/home"
import Carrinho from "../pages/Carrinho"
import User from "../pages/User"

const AuthStack = createStackNavigator()


const AuthRoutes = () => (
    <NavigationContainer>
            

        <AuthStack.Navigator headerMode="none" screenOptions={{
                cardStyle: {
                    backgroundColor: "white"
                },
            
                
        
            }}>
            <AuthStack.Screen name="Home" component={Home}/>
            <AuthStack.Screen name="Carrinho" component={Carrinho}/>
            <AuthStack.Screen name="User" component={User}/>

        </AuthStack.Navigator>
    </NavigationContainer>
)

export default AuthRoutes

