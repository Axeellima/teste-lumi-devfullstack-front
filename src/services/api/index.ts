import axios from "axios"

const API_URL = "https://teste-lumi-devfullstack-back.onrender.com/"

const apiDefault = axios.create({
  baseURL: API_URL,
})

export default apiDefault
