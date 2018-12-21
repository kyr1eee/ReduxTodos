import React from 'react';
import PropTypes from 'prop-types';

Link.PropTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

function Link({active, children, onClick}) {
    return (
        <button
            onClick={onClick}
            disabled={active}
            style={{marginLeft: '6px'}}
        >
            {children}
        </button>
    )
}

export default Link;