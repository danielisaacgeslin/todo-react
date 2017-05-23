import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import TodoListPack from './todo-list';
require("../css/style.scss");

store.subscribe(()=>console.log(store.getState()));

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <HashRouter>
                    <Route path="/" component={TodoListPack.TodoList}></Route>
                </HashRouter>
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));