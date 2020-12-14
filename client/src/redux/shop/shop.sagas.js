import { takeLatest, call, put, all } from 'redux-saga/effects';
import ShopActionTypes from './shop.type';
import {
    fetchCollectionsSuccess,
    fetchCollectionsFailure
} from './shop.action';


import {
    firestore,
    convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';


export function* fetchCollectionAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    }
    catch (error) {
        yield put(fetchCollectionsFailure(error.message));
    }
}
// collectionRef.get()
//     .then(snapshot => {
//         const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//         // console.log(collectionsMap);
//         dispatch(fetchCollectionsSuccess(collectionsMap));
//     })
//     .catch(error => dispatch(fetchCollectionsFailure(error.message)));
// yield console.log('i am fired');


export function* fetchCollectionsStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionAsync
    );
}

export function* shopSaga() {
    yield all([call(fetchCollectionsStart)]);
}