import axios from "axios"

export const appAdataper = axios.create({
  baseURL: process.env.APP_URL
    ? `${process.env.APP_URL}/api`
    : "http://localhost:3001/api",
})
