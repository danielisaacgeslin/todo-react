import { takeEvery, takeLatest } from 'redux-saga';
import { call, put, take } from 'redux-saga/effects';
// import axios from 'axios';

function* fetchTodosAsync() {
    // const response = yield call(()=>axios.get('/movies.json'));
    const response = [{ text: 'some' }, { text: 'some other' }];
    yield put({ type: 'FETCH_TODOS_SUCCESS', payload: response });
}

function* fetchTodos() {
    yield* takeLatest('FETCH_TODOS', fetchTodosAsync);
}

export default { fetchTodos };