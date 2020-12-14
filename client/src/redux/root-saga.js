import { all, call } from 'redux-saga/effects';
import { shopSaga } from './shop/shop.sagas';
import { userSagas } from '../redux/user/user.sagas';
import { cartSaga } from '../redux/cart/cart.saga';


export default function* rootSaga() {
    yield all([
        call(shopSaga),
        call(userSagas),
        call(cartSaga)
    ]);
}