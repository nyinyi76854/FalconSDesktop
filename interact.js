const { initializeApp } = require('firebase/app');
const { getAuth, createUserWithEmailAndPassword } = require('firebase/auth');


const firebaseConfig = {
  apiKey: "AIzaSyCwujCfJ_x3mX_SoR-De0jKe1j11Ji3gRg",
  authDomain: "rela-f18e9.firebaseapp.com",
  databaseURL: "https://rela-f18e9-default-rtdb.firebaseio.com",
  projectId: "rela-f18e9",
  storageBucket: "rela-f18e9.appspot.com",
  messagingSenderId: "44678958613",
  appId: "1:44678958613:web:ebee92509037706c9ac81c",
  measurementId: "G-7JBWSXRKM0"
};
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

// Function to sign up a new user with email and password
function signUpWithEmailAndPassword(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}

// Example usage
const email = "example@example.com";
const password = "examplepassword";

signUpWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed up successfully
        const user = userCredential.user;
        console.log('User signed up:', user);
    })
    .catch((error) => {
        // Handle errors
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Sign up error:', errorCode, errorMessage);
    });