import { takeLatest, put } from 'redux-saga/effects';

function* handleWebSocketMessage(action) {
    try {
        const data = action.payload;
        const orderBookData = data;

        yield put({ type: 'UPDATE_ORDER_BOOK', payload: orderBookData });
    } catch (error) {
        console.error('WebSocket message error', error);
    }
}

function* watchWebSocketEvents() {
    yield takeLatest('WEBSOCKET_MESSAGE', handleWebSocketMessage);
}

export default function* rootSaga() {
    yield watchWebSocketEvents();
}
