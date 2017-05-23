export const todos = (state = [], action = {}) => {
    switch (action.type) {
        case 'FETCH_TODOS_SUCCESS':
            return state.concat(action.payload);
        case 'ADD_TODO':
            return state.concat(action.payload);
        default:
            return state;
    }
}

export default { todos };