import axios from 'axios'
import { baseURL } from '../../const'

export const fetchGutendexBookSearch = (searchInput, page) =>
  axios({
    method: 'GET',
    url: `/search`,
    params: {
      input: searchInput,
      page: page
    },
    baseURL
  })
