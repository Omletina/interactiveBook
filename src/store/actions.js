//import api from './../api';

export default {
  GET_BOOK(context, action) {
    return api('get_playlist_list', action.payload).then(data => {
        context.commit('GET_BOOK', data);
    })
  }
};
