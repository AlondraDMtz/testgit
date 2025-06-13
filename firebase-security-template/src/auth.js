import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export function loginWithGoogle() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then(result => console.log('Usuario autenticado:', result.user))
    .catch(error => console.error('Error de autenticación:', error));
}
