import axios from "axios"

export const appAdataper = axios.create({
  baseURL: "http://localhost:3000/api",
})
