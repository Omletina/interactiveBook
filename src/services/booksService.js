import Vue from 'vue'
import config from './../config'

export default {

  // Запрос http книг, переделать на запрос в файербэйс
  getBooks (request) {
    return Vue.http.get(`${config.books.HOST}${config.books.API}`, request)
      .then((response) => {
        return response.data
        // Promise.resolve(response.data)
      })
      .catch((error) => {
        debugger
        return error
        // Promise.reject(error)
      })
  }
  // other methods
}
