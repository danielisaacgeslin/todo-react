import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import TodoListPack from './todo-list';

const reducers = combineReducers(Object.assign({}, TodoListPack.TodoListReducers));

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, {}, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(TodoListPack.TodoListSagas.fetchTodos);

export default store;