import React, {useState, useEffect} from "react"
import DropZone from "../Dropzone"
import {Formulario} from "./style"
import api from "../api"
import Modal from "../Sucess"

const Form = () => {
    const [selectedFile, setSelectedFile] = useState()
    const [formData, setFormData] = useState([])
    const [selected, setSelected] = useState()
    const [categorias, setCategorias] = useState([])
    const [sucess, setSucess] = useState(false)

    useEffect(() => {
        api.get("categorias")
        .then(response => setCategorias(response.data))

    }, [])


    function handleChange(event){
        const { name, value } = event.target

        setFormData({...formData, [name]: value})
    }

    function handleSelect(event){
        const valor = event.target.value
        setSelected(valor)
    }   

    function submitForm(event){
        event.preventDefault()    
    
        const {produto, preco, descricao} = formData
    
        
        const data = new FormData()
    
        data.append("preco", preco)
        data.append("descricao", descricao)
        data.append("produto", produto)
        data.append("categorias[]", [selected])
        data.append("imagem", selectedFile)
    
    
        api.post("products", data)
        .then(response => {
            if(response.data.sucess){
                setSucess(true)

                setTimeout(() => setSucess(false), 1000)
            }
            else {
                alert("Erro ao cadastrar, tente novamente")
            }
            console.log(response.data)
        }).catch(err => console.log(err))
       
        }

    return (
        <>

            <Modal show={sucess}/>    

            <Formulario>
                
                <input type="text" onChange={handleChange} name="produto" placeholder="Produto" required/>
                <input type="text" onChange={handleChange} name="preco" placeholder="Preço" required/>
                <input type="text" onChange={handleChange} name="descricao" placeholder="Descricao" required/>
                <select onChange={handleSelect} value={selected} id="categorias" name="categorias">
                        <option>Escolha uma categoria</option>
                    {categorias.map(categoria => (
                        <option key={categoria.id} value={categoria.id}>{categoria.categoria}</option>
                    ))}
                    
                    </select> 
                <DropZone onFileUploaded={setSelectedFile}/>

                <button onClick={submitForm}>Enviar</button>

            </Formulario>

        </>
    )
}

export default Form
