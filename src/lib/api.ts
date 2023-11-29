import axios from 'axios'

const url = process.env.NEXTAUTH_URL + '/api'

const api = axios.create({
  baseURL: process.env.NEXTAUTH_URL ?
    url :
   'http://localhost:3000/api'
})

export { api }
