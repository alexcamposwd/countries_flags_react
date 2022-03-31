import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://restcountries.com/v2',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})
