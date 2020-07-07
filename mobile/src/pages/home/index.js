import React, {useState} from "react"

import Footer from "../../components/Footer"
import Products from "../../components/Products"

import {Content, Scroll, Main, Input, Pesquisa} from "./style"

import IconFeather from "react-native-vector-icons/Feather"

const Home = () => {

    const [search, setSearch] = useState("")

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
             //value={search}
              />

            <Pesquisa>
                 <IconFeather name="search" color="white" size={30}/>
            </Pesquisa>

        </Content>

        <Scroll>
            {search.length === 0 ? (
                <>
                <Products url="/products?categoria=1"/>
                <Products url="/products?categoria=2"/>
                <Products url="/products?categoria=3"/>
                <Products url="/products?categoria=4"/>
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