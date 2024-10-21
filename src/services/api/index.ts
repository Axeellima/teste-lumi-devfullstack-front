import axios from "axios"

const API_URL = "http://localhost:3333/"

const apiDefault = axios.create({
  baseURL: API_URL,
})

export default apiDefault
