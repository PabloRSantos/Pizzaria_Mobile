import React, { useEffect, useState } from "react"
import {View, ActivityIndicator} from "react-native"

import IconAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';

import api from "../../services/api"


import {Titulo, Content, DivImagem, Imagem, Infos, Nome, Preco, Button, Main} from "./style"
import { ScrollView } from "react-native-gesture-handler"

const Products = (props) => {

    const [products, setProducts] = useState([])
    const [titulo, setTitulo] = useState("")


    useEffect(() => {

       getProducts()

    }, [props.url])


    function getProducts(){
        let isCancelled = false

        api.get(`${props.url}`)
        .then(response => {
            if (!isCancelled) {
                setProducts(response.data.products)

                if(products.length === 0) {
                    setTitulo("Nenhum produto encontrado")
                }
 
                if(props.titulo)
                return setTitulo(`"${props.titulo}"`)

                setTitulo(response.data.products[0].categoria)
            } 
             })

    if(products.length === 0) {
        console.log(products)
        return (
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <ActivityIndicator size="large" color="black"/>
            </View>
        )
    }
        
    return () => {
        isCancelled = true;
      }
    }


    async function addCar(id){

     const {data} = await api.post("/carrinho", {product_id: id})

    }

    async function removeCar(id) {
        const {data} = await api.delete(`/carrinho?product_id=${id}`)


        getProducts()
    }

    return (
        <Main>
        
        <Titulo>{titulo || "Carrinho"}</Titulo>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {products.map(product => (
                <Content key={product.carrinho_id || product.id}>

                <DivImagem>
                    <Imagem
                    resizeMode="cover"
                    source={{uri: `https://manjeri-backend.herokuapp.com//uploads/products/${product.imagem}`}}/>
                </DivImagem>

                <Infos>
                    <Nome>{product.produto}</Nome>
                    <Preco>R${product.preco}</Preco>
                    <Button onPress={props.page ? () => removeCar(product.id) : () => addCar(product.id)}>

                        {props.page !== "carrinho" ? (
                        <IconAwesome name="cart-plus" size={20} color="white"/>
                        ) : (
                        <IconMaterial name="remove-shopping-cart" size={20} color="white"/>
                        )}
                    </Button>
                </Infos>

                </Content>
            ))}
        </ScrollView>
        </Main>
    )

}

export default Products