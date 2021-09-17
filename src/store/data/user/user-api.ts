import axios from 'axios'

export const retrieveUsers = () => axios.get('https://randomuser.me/api?results=10')
