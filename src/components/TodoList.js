import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

TodoList.PropTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        }).isRequired
    ).isRequired,
    toggleTodo: PropTypes.func.isRequired
}

function TodoList({todos, toggleTodo}) {
    return (
    <ul>
        {todos.map((todo, index) => (
            <Todo key={index} {...todo} onClick={() => toggleTodo(index)} />
        ))}
    </ul>
    );
}

export default TodoList;
