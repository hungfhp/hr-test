import axios from "axios"
import { API_ENDPOINT } from "#/constants.js"

export function fetchApi1(config = {}) {
  let apiUrl = API_ENDPOINT + config.url

  //   if (!!req || typeof window === "undefined") {
  //     const reqHeader = (req && req.headers) || {}
  //     config.headers = { ...reqHeader, host: apiConfig.host }
  //   } else {
  //     const token = cookie.getCookie("token")
  //     if (token) {
  //       config.headers = { authorization: token }
  //     }
  //     // config.headers = {
  //     //   ...config.header,
  //     //   'Allow-Control-Allow-Origin': '*'
  //     // }
  //   }
  //   if (config.headers && config.headers.host) {
  //     delete config.headers.host // wating config ACAO
  //   }

  return axios({ ...config, url: apiUrl })
}

export default axios.create({
  baseURL: API_ENDPOINT,
  timeout: 3000,
  headers: { authorization: localStorage.getItem("token") }
})
