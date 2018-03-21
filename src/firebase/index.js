import firebase from 'firebase'
// import firebaseui from 'firebaseui'
// import 'firebaseui/dist/firebaseui.css'
// import store from './store'
// import * as firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAxnhsCNaFB9OkwxPNTgjqTpNVumy_4Wyo',
  authDomain: 'book-9601a.firebaseapp.com',
  databaseURL: 'https://book-9601a.firebaseio.com',
  projectId: 'book-9601a',
  storageBucket: 'book-9601a.appspot.com',
  messagingSenderId: '527252966937'
})
const db = firebaseApp.database()

// if (__DEV__) {
//   window.firebase = firebase
// }

// export const ui = new firebaseui.auth.AuthUI(firebase.auth())
const rootRef = db.ref().child('id')
// db.ref('book-9601a/').once('value', function (snap) {
//   debugger
//   console.log(JSON.stringify(snap.val()))
// })
console.log(rootRef)
debugger

/**
 * Sync store.state.user with firebase.auth().currentUser
 *
 * This callback is called when firebase.auth() detects user changes,
 * so just update the vuex store with the new user object.
 */
// firebase.auth().onAuthStateChanged(user => {
//   store.commit('UPDATE_USER', user)
// })

export default firebase
