import Vuex from 'vuex'
import Vue from 'vue'
import booksService from '../services/booksService'

// import api from './../api'

// import state from './state';
// import mutations from './mutations';
// import getters from './getters';
// import actions from './actions';

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production';
// model = {
//   book: 1,
//   chapter: 1,
//   step: 1
// }
const moduleA = {
  state: {
    model: {}
  },
  actions: {
    setModel ({state, commit, rootState}, item) {
      // Сохраняем в сессию
      localStorage.setItem('book', JSON.stringify(item))
      commit('SET_MODEL', item)
    },
    GetModelLocal ({state, commit, rootState}, item) {
      // Загружаем из сессии, при обновлении страницы
      let modelLocal = localStorage.getItem('book')
      if (!modelLocal || modelLocal.length === 0) return
      modelLocal = JSON.parse(modelLocal)
      commit('SET_MODEL', modelLocal)
    }
  },
  mutations: {
    SET_MODEL (state, item) {
      state.model = item
    },
    GET_MODEL_LOCAL (state, item) {
      state.model = item
    }
  },
  getters: {
    model (state, getters, rootState) {
      return state.model
    }
  }
}
const moduleB = {
  state: {
    books: []
  },
  actions: {
    GetBookListAction ({state, commit, rootState}, request) {
      return booksService.getBooks(request)
        .then((response) => commit('GET_BOOK_LIST', response))
        .catch((error) => commit('GET_BOOK_LIST', error))
    }
  },
  mutations: {
    GET_BOOK_LIST (state, item) {
      if (!item) return
      state.books = item
    }
  },
  getters: {
    getBooksList (state, getters, rootState) {
      if (!state.books) return []
      return state.books.map(function (item) {
        return {'id': item.id, 'name': item.name}
      })
    },
    getCurrentBook (state, getters, rootState) {
      if (!state.books) return {}
      let model = getters.model
      let books = state.books
      let result = {}
      for (let i = 0; i < books.length; i++) {
        if (books[i].id === model.book) {
          result = books[i]
          break
        }
      }
      return result
    },
    getChapter (state, getters, rootState) {
      if (!state.books) return {}
      let model = getters.model
      let chapters = getters.getCurrentBook.chapters || []
      let result = {}
      for (let i = 0; i < chapters.length; i++) {
        if (chapters[i].id === model.chapter) {
          result = chapters[i]
          break
        }
      }
      return result
    },
    getStep (state, getters, rootState) {
      if (!state.books) return {}
      let model = getters.model
      let steps = getters.getCurrentBook.steps || []
      let result = {}
      for (let i = 0; i < steps.length; i++) {
        if (steps[i].id === model.step) {
          result = steps[i]
          break
        }
      }
      return result
    }
  }
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

export default store

// store.state.a // -> состояние модуля moduleA
// store.state.b // -> состояние модуля moduleB

// export default new Vuex.Store({
//   state: {
//     model: {}
//   },
//   actions: {
//     refreshModel ({commit}, item) {
//       commit('REFRESH_MODEL', item)
//     }
//   },
//   mutations: {
//     REFRESH_MODEL (state, item) {
//       state.model[item.key] = item.value
//     }
//   },
//   getters: {
//     model (state) {
//       return state.model
//     }
//   }
//   strict: debug,
//   state,
//   mutations,
//   getters,
//   actions
// })
