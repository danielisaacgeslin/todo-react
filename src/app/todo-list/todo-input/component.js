import React from 'react';

require("./style.scss");

export default class TodoInput extends React.Component {
    constructor(props) {
        super(props);
    }

    onAddTodo() {
        const input = this.refs.input
        if (!input.value) return;
        this.props.addTodo(input.value);
        input.value = null;
    }

    render() {
        return (
            <div className="todo-input">
                <input ref="input" className="todo-input__input" type="text" />
                <button
                    onClick={this.onAddTodo.bind(this)}
                    className="todo-input__button btn btn-success">
                    ADD
                </button>
            </div>
        );
    }
}
