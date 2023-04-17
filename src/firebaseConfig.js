import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'
// import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBjQLcZUpHTLRF7y-qa0hMFIZa22anpS0k',
  authDomain: 'booking-code-37a67.firebaseapp.com',
  databaseURL: 'https://booking-code-37a67-default-rtdb.firebaseio.com',
  projectId: 'booking-code-37a67',
  storageBucket: 'booking-code-37a67.appspot.com',
  messagingSenderId: '275058783582',
  appId: '1:275058783582:web:e88e8eeb87b5dfac128bcf'
}

// Initialize Firebase
initializeApp(firebaseConfig)
const db = getFirestore()
// const auth = getAuth()

export { db }
