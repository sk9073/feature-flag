import { initializeApp, getApps } from "firebase/app";
import {
  getAuth,
  connectAuthEmulator,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { firebaseConfig } from "./config";

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;

function initialize() {
  const firebaseApp = initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp);
  return { firebaseApp, auth };
}

function connectToEmulators({ firebaseApp, auth }: any) {
  if (window.location.hostname === "localhost") {
    connectAuthEmulator(auth, "http://localhost:9099", {
      disableWarnings: true,
    });
  }
  return { firebaseApp, auth };
}

export function getFirebase() {
  const existingApp = getApps().at(0);
  if (existingApp) return initialize();
  return connectToEmulators(initialize());
}

export const signInUser = async (
  email: string,
  password: string
): Promise<any> => {
  const { auth } = getFirebase();

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return user;
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode, errorMessage);
    return null;
  }
};

export const signUpUser = async (email: string, password: string) => {
  const { auth } = getFirebase();
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return user;
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode, errorMessage);
    return null;
  }
};
