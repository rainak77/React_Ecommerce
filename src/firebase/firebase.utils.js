import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCjtchCbn4ZrHORM-coEDbj4AF-CBCd0yQ",
    authDomain: "crwn-db-736cc.firebaseapp.com",
    databaseURL: "https://crwn-db-736cc.firebaseio.com",
    projectId: "crwn-db-736cc",
    storageBucket: "crwn-db-736cc.appspot.com",
    messagingSenderId: "27153439819",
    appId: "1:27153439819:web:9210765b2df55cad44c1ce",
    measurementId: "G-JDQMN1BNM7"
};

firebase.initializeApp(config);


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        }
        catch (error) {
            console.log('error creating data', error.message);
        }
    }
    return userRef;
};

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedcollection = collections.docs.map(doc => {
        const { title, items } = doc.data();
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        };
    });
    return transformedcollection.reduce((acc, item) => {
        acc[item.title.toLowerCase()] = item;
        return acc;
    }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;