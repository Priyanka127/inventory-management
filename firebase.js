import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBDOY_1qmwIdRsUVXL0tjbksCkpFBAy8Go",
    authDomain: "inventory-management-app-2299e.firebaseapp.com",
    projectId: "inventory-management-app-2299e",
    storageBucket: "inventory-management-app-2299e.appspot.com",
    messagingSenderId: "213684661179",
    appId: "1:213684661179:web:0668a8c15b56383805f29e",
    measurementId: "G-GE9BTVHDHV"};
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };