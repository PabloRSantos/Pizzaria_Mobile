import React, {useState} from "react"

import Footer from "../../components/Footer"
import Products from "../../components/Products"

import { Linking } from "react-native"

import {Content, Scroll, Main, Input, Whats} from "./style"


const Home = () => {

    const [search, setSearch] = useState("")

     
    function whatsapp() {
    Linking.openURL(`whatsapp://send?phone=5551995815232`);
   }

    function handleSearch(text){
        setSearch(text)
    }

    return (
        <Main>
             <Content>
            <Input
             placeholder="Faça sua pesquisa"
             autoCapitalize="characters"
             autoCorrect={false}
             onChangeText={text => handleSearch(text)}
             value={search}
              />

            <Whats onPress={whatsapp}/>

        </Content>

        <Scroll showsVerticalScrollIndicator={false}>
            {search.length === 0 ? (
                <>
                <Products url="/products?categoria=1"/>
                <Products url="/products?categoria=2"/>
                <Products url="/products?categoria=3"/>
                <Products url="/products?categoria=4"/>
                <Products url="/products?categoria=5"/>
                <Products url="/products?categoria=6"/>
                <Products url="/products?categoria=7"/>
                <Products url="/products?categoria=8"/>
                </>
            ) : (
                <Products url={`/products?pesquisa=${search}`} titulo={search}/> 
            )}
           
        </Scroll>
        
            <Footer />
        </Main>
    )
}

export default Home