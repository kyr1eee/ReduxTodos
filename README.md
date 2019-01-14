## redux
![redux数据流](https://github.com/kyr1eee/Kyr1eeeFrontEndNote/blob/master/%E5%BE%85%E6%95%B4%E7%90%86/redux%E6%95%B0%E6%8D%AE%E6%B5%81.png)

## reduxTools数据流
'''


state: {
  todos: [{
    id: number,
    text: string,
    completed: boolean
  }],
  visibilityFilter: 'SHOW_ALL' / 'SHOWCOMPLITED' / 'SHOW_ACTIVE'
}

actionCreator: {
  addTodo: function(text){
    return {type: ADD_TODO, text, id: nextTodoId++}
  }

  toggleTodo: function(id) {
    return {type: TOGGLE_TODO, id}
  }

  setVisibilityFilter: function(filter) {
    return {type: SET_VISIBILITY_FILTER, filter}
  }
}




dispatch(容器组件) -> actionCreator(调用action事件) -> reducer(获取对应事件,进行对应数据处理) -> state(状态更新)

'''

<hr>
[+] Store : 整个应用只能有一个store.
``` 
import { createStore } from 'redux';
import reduces from './reducer';
const store = createStore(reducers);
```

[+]State : 全局共享数据

```
const state = store.getState();
```

[+]Action: 描述当前发生的事情, 改变state的唯一方法
```
const action = {
  type: 'SHOW_ALL'
  data: '...'
}
```

[+]Action Creator: 多种Action情况
```
export function showAll(data) {
  return {
    type: 'SHOW_ALL',
    data
  }
}

export function getUpdate(update) {
  return {
    type: 'UPDATE',
    update
  }
}

export function getSelect(select) {
  return {
    type: 'SELECT',
    select
  }
}
```

[+]dispatch: 发出Action的唯一方法
```
store.dispatch({
  type: 'SHOW_ALL',
  data: 'hello'
})
```

[+]Reducer: state如何改变的过程
```
export function update(state, action) {
  // action.type...
  switch(action.type) {
    case actionTypes.UPDATE:
      return {...state, update: true}
    case actionTypes.SELECT:
      return {...state, select: true}
    default:
      return state
  }
}
```

[+]combineReducer: 合并所有reducer
```
import combineReducer from 'redux';
import update from './updateReducer';
import select from './selectReducer';
export default combineReducer({
  update,
  select,
});

// 此时state: {update, select}
```

[+]subscribe : 设置监听函数,state一旦变化则调用该函数.store.subscribe返回一个函数,调用则解除监听
```
// 设置监听函数
let unsubscribe = store.subscribe(() => { console.log(store.getState()) });
// 解除监听
unsubscribe();
```

[+]mapStateToProps: state转化为props
```
const mapStateToProps = state => {
  update: state.update,
  select: state.select,
}
```
[+]mapDispatchToProps: dispatch转化为props
```
const mapDispatchToProps = dispatch => {
  getUpdate: update => dispatch(getUpdate(update)),
  getSelect: select => dispatch(getSelect(select)),
}
```
[+]connect
```
import {connect} from 'react-redux';
// 该容器组件绑定UI组件
const containerComponent = connect(mapStateToProps, mapDispatchToProps)(pureComponent)
// pureComponent.props = {update:..., select:..., getUpdate:..., getSelect:...,}
```

[+]<Provider> : 让容器组件拿到state对象
```
import { Provider } from 'react-redux'
import { createStore } from 'redux'
let store = createStore(todoApp);
render(
<Provider store={store}>
  <App />
</Provider>,
document.getElementByid('root')
)
```

