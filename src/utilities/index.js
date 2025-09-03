// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp} from "firebase/app";
// import { getAnalytics } = "firebase/analytics";
import { collection, addDoc, serverTimestamp, getFirestore} from 'firebase/firestore';

let firebaseConfig;

    // This branch is primarily for your local development environment
    firebaseConfig = {
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
        measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
    };

// Log the final firebaseConfig object before initialization
console.log("Final firebaseConfig object before initializeApp:", firebaseConfig);

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app); // Re-enable if you want Analytics
const db = getFirestore(app, 'leads-info');

console.log("Firestore DB instance:", db); // Shows if Firestore object is valid

const submitLeadInfo = async (leadInfo)=>{
    try{
        console.log("Attempting to add document to Firestore 'leads-info' DB...");
        const docRef = await addDoc(collection(db, "leads"), {
            ...leadInfo,
            timeStamp : serverTimestamp()
        });
        console.log("Document successfully added with ID:", docRef.id);
        return true;
    }
    catch(e){
        console.error("Error adding document to Firestore:", e); // This should now catch errors if any
        return false;
    }
}

export {submitLeadInfo};
