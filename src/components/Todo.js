import React from 'react';
import PropTypes from 'prop-types';

function Todo({onClick, completed, text}) {
    return (
        <li
            onClick={onClick}
            style={{textDecoration: completed ? 'line-through' : 'none'}}
        >{text}</li>
    );
}

Todo.PropTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
}

export default Todo;