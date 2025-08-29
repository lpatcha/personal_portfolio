// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp} from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { collection, addDoc, serverTimestamp, getFirestore} from 'firebase/firestore';


let firebaseConfig;

// Check if we're running in a deployed App Hosting environment
// Firebase App Hosting injects window.FIREBASE_WEBAPP_CONFIG (or similar)
// If it exists, use that config.
if (typeof window !== 'undefined' && (window.FIREBASE_WEBAPP_CONFIG || window.FIREBASE_CONFIG)) {
    firebaseConfig = window.FIREBASE_WEBAPP_CONFIG || window.FIREBASE_CONFIG;
    console.log("Using Firebase config from App Hosting (window object).");
} else {
    // We are likely in a local development environment.
    // Load config from process.env (requires a build tool like Webpack/Vite to process .env files)
    firebaseConfig = {
        apiKey: process.env.NEXT_PUBLIC_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
        messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
        appId: process.env.NEXT_PUBLIC_APP_ID,
        measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
    };
    console.log("Using Firebase config from local .env (process.env).");

    // Optional: Log the config being used locally (for debugging)
    // console.log("Local Firebase Config:", firebaseConfig);
}
// Initialize Firebase

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);
const db = getFirestore(app, 'leads-info');
console.log(db);
const submitLeadInfo = async (leadInfo)=>{
    try{
        const docRef = await addDoc(collection(db, "leads"), {
            ...leadInfo,
            timeStamp : serverTimestamp()
        }
        );
        return true;
    }
    catch(e){
        return false;
    }
    return false;
}

export {submitLeadInfo}