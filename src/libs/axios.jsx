import axios from 'axios'

const CORS = 'http://crossorigin.me/'

export const getPeople = () => {
  let url = CORS + 'http://swapi.co/api/people/'
  return axios.get(url)
}

export const getPerson = (id) => {
  let url = CORS + 'http://swapi.co/api/people/' + id
  console.log(url)
  return axios.get(url)
}
