import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyCW1FDRpLCRGlnHmINSYjKaBQ3qBcvml4s',
	databaseURL: 'https://hackers-week-3-0.firebaseio.com',
	projectId: 'hackers-week-3-0',
	storageBucket: ''
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase
	.firestore()
	.enablePersistence()
	.catch(function(err) {
		if (err.code == 'failed-precondition') {
			// TODO
		} else if (err.code == 'unimplemented') {
			// TODO
		}
	});

export var db = firebase.firestore();
