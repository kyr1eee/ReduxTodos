import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

// reducer:描述如何更新state

// state {
//     todos: [],
//     visibilityFilter: 'SHOW_ALL'
// }

export default combineReducers({
    todos,
    visibilityFilter
})