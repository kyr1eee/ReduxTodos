import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

// 解构获取 props.dispatch
const AddTodo = ({ dispatch }) => {
    let textInput;

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                if(!textInput.value.trim()) {
                    return
                }
                dispatch(addTodo(textInput.value));
                textInput.value = '';
            }}>
                <input ref={input => textInput = input} />
                <button type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    )
}

// connect(mapStateToProps, mapDispatchToProps)
// 不传递mapDispatchToProps则默认传递 props.dispatch
export default connect()(AddTodo);
