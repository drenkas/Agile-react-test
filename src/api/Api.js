import axios from 'axios'

export const getFetch = (url) => {
  return axios.get(url)
}
