import { firestorePlugin } from 'vuefire'
import Vue from 'vue'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(firestorePlugin)

firebase.initializeApp({
  projectId: 'hackers-week-3-0',
  databaseURL: 'https://hackers-week-3-0.firebaseio.com'
})

export const db = firebase.firestore()
