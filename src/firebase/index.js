import firebase from 'firebase'
// import firebaseui from 'firebaseui'
// import 'firebaseui/dist/firebaseui.css'
// import store from './store'
// import * as firebase from 'firebase'

firebase.initializeApp({
  apiKey: 'AIzaSyAxnhsCNaFB9OkwxPNTgjqTpNVumy_4Wyo',
  authDomain: 'book-9601a.firebaseapp.com',
  databaseURL: 'https://book-9601a.firebaseio.com',
  projectId: 'book-9601a',
  storageBucket: 'book-9601a.appspot.com',
  messagingSenderId: '527252966937'
})
// var db = appFirebase.database()
// var booksRef = db.ref()
// export default booksRef

export default {
  database: firebase.database()
}
