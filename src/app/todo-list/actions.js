const fetchTodos = () => {
    return {
        type: 'FETCH_TODOS',
        payload: null
    };
};

const addTodo = text => {
    return {
        type: 'ADD_TODO',
        payload: { text }
    };
};

export default { fetchTodos, addTodo };