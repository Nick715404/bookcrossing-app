import axios from "axios";

export const api = axios.create({
  baseURL: 'http://localhost:3100/api'
})

export const url = 'http://localhost:3100/api';