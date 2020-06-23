import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/firestore'

const firebaseConfig = {
	apiKey            : 'AIzaSyAbZH3g0_B1S44FFiEEjFZvQk2KuGI00VY',
	authDomain        : 'crud-d5e05.firebaseapp.com',
	databaseURL       : 'https://crud-d5e05.firebaseio.com',
	projectId         : 'crud-d5e05',
	storageBucket     : 'crud-d5e05.appspot.com',
	messagingSenderId : '239483585426',
	appId             : '1:239483585426:web:27e9ddd608b9862bf4774b'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase
