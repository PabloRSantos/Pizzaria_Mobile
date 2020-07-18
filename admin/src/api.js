import axios from "axios"

const api = axios.create({
    baseURL: "https://manjeri-backend.herokuapp.com/"
})

export default api