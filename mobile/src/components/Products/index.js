import React, { useEffect, useState } from "react"
import {View, ActivityIndicator} from "react-native"

import IconAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';

import api from "../../services/api"


import {Titulo, Content, DivImagem, Imagem, Infos, Nome, Preco, Button, Main, Loading} from "./style"
import { ScrollView } from "react-native-gesture-handler"

const Products = (props) => {

    const [products, setProducts] = useState([])
    const [titulo, setTitulo] = useState("")
    const [isCancelled, setIsCancelled] = useState(false)



    useEffect(() => {
        
        getProducts()

    }, [props.buyCondition, props.titulo, ])


    async function getProducts(){
        
        setIsCancelled(false)

        const {data} = await api.get(`${props.url}`)


                setIsCancelled(true)
                setProducts(data.products)

                if(props.titulo)
                return setTitulo(props.titulo)

                if(data.products.length > 0)
                return setTitulo(data.products[0].categoria)

                setTitulo("Ooops")


    }

    async function addCar(id){

     await api.post("/carrinho", {product_id: id})

    }

    async function removeCar(id) {
        await api.delete(`/carrinho?product_id=${id}`)


        getProducts()
    }


    return (
        <Main>
        

        {isCancelled === false ? (
            <Loading>
                <ActivityIndicator size="large" color="#008577" />
             </Loading>
        ) : (
            <>
            <Titulo>{titulo || "Ooops"}</Titulo>
            
            {products.length > 0 ? (
                   <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {products.map(product => (
                        <Content key={product.carrinho_id || product.id}>
        
                        <DivImagem>
                            <Imagem
                            resizeMode="cover"
                            source={{uri: `https://manjeri-backend.herokuapp.com/uploads/products/${product.imagem}`}}/>
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
            ) : (
                <Nome style={{marginLeft: 20}}>Nenhum Produto Encontado</Nome>
            )}
            </>
        )}
       
          
        </Main>
    )

}

export default Products