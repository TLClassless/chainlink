import firebase from './firebase';

export let email;
export let password;

export function createUser() {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
})}