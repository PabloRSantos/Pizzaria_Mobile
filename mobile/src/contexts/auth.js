import React, { createContext, useState, useEffect, useContext} from "react"
import api from "../services/api"
import {AsyncStorage} from 'react-native';


const AuthContext = createContext({})

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(false)
    const [loading, setLoading] = useState(true)
    const [modal, setModal] = useState(true)

    useEffect(() => {
        async function loadStoragedData(){

           const storagedUser = await AsyncStorage.getItem("manjeriId")
           const storagedToken = await AsyncStorage.getItem("manjeriToken")

           if(storagedUser && storagedToken) {
               setUser(true)
              api.defaults.headers["Authorization"] = `Bearer ${storagedToken}`
           }

           setLoading(false)
        }

        loadStoragedData()

    }, [])

    async function SignUp(form){

       const {data} = await api.post("/cadastro", form)


       if(data.error) {
            return data.error
       }

            api.defaults.headers["authorization"] = `Bearer ${data.token}`

            setUser(true)

           await AsyncStorage.setItem("manjeriId", data.id)
           await AsyncStorage.setItem("manjeriToken", data.token)

    }

    async function SignIn(form){

        const {data} = await api.post("/login", form)
        
        if(data.error) {
            return data.error
        }



        setUser(true)

        api.defaults.headers["authorization"] = `Bearer ${data.token}`

        await AsyncStorage.setItem("manjeriId", data.id)
        await AsyncStorage.setItem("manjeriToken", data.token)
     
    }

    function SignOut(){
        AsyncStorage.clear().then(() => {
            setUser(false)
        })
    }

   
    return (
        <AuthContext.Provider value={{signed: !!user, loading, SignIn, SignUp, SignOut, user}}> 
            {children}
        </AuthContext.Provider>
    )
  
}

export function useAuth() {
    const context = useContext(AuthContext)

    return context
}