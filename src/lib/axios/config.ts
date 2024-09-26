import axios from "axios";


export const api = axios.create({
  baseURL: "http://www.academia.org.br:8080/volp/api/v1/synchronization/",
  httpAgent: true,
})