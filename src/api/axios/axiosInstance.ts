import axios from "axios";

export const api = axios.create({
  baseURL: 'https://буккросинг.рф:3100/api'
})

export const url = 'https://буккросинг.рф:3100/api';