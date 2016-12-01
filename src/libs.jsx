import axios from 'axios'

export const getUsers = () => {
  let CORS = 'http://crossorigin.me/'
  let url = CORS + 'http://swapi.co/api/people/'
  return axios.get(url)
}
