import axios from "axios"
import { API_ENDPOINT } from "#/constants.js"

export default axios.create({
  baseURL: API_ENDPOINT,
  timeout: 3000,
  headers: { authorization: localStorage.getItem("token") }
})
