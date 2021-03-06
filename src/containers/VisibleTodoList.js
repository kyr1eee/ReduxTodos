import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';
import { VisibilityFilters } from '../actions';

const showVisibleTodos = (todos, filter) => {
    switch(filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed);
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed);
        default:
            throw new Error('Unknown filter');
    }
}

// TodoList.props = {...TodoList.props, todos}
const mapStateToProps = state => ({
    todos: showVisibleTodos(state.todos, state.visibilityFilter)
})

// TodoList.props.toggleTodo = id => dispatch(toggleTodo(id))
const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})

// redux store 绑定 TodoList组件
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)