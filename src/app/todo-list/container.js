import React from 'react';
import { connect } from 'react-redux';

import { default as todoListActions } from './actions';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.props.fetchTodos();
    }

    render() {
        console.log('todos', this.props.todos);
        return (
            <div className="todo-list">
                <ul>
                    {this.props.todos.map((todo, i) => (<li key={i}>{todo.text}</li>))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { todos: state.todos };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTodos: () => dispatch(todoListActions.fetchTodos())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);