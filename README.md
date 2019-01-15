## redux
![redux数据流](https://github.com/kyr1eee/Kyr1eeeFrontEndNote/blob/master/%E5%BE%85%E6%95%B4%E7%90%86/redux%E6%95%B0%E6%8D%AE%E6%B5%81.png)

## reduxTools数据流
```
// 全局状态
state: {
  todos: [{
    id: number,
    text: string,
    completed: boolean
  }],
  visibilityFilter: 'SHOW_ALL' / 'SHOWCOMPLITED' / 'SHOW_ACTIVE'
}

// 描述发生的事件
action: {
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

// 负责dispatch action
actionCreator: {
  toggleTodo: id => {return (dispatch) => { dispatch(toggleTodo(id)) },
  onClick: () => {return (dispatch) => dispatch(setVisibilityFilter(ownProps.filter)) }
}

// action被dispatch后处理并返回新的state数据
reducer: {
  todos,
  visibilityFilter,
}
```


```
<Provider>组件包裹 <- connect(绑定UI组件为容器组件) <- mapStateToProps,mapDispatchToProps(用于容器组件的props) <- container(容器组件) -> actionCreator(负责dispatch action事件) -> action.type(指定事件) -> store(自动处理, 将preState, action调度至reducer) -> reducer(获取对应事件,进行对应数据处理)  -> store(数据更新)

```

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
export function action(data) {
  return {
    type: 'SHOW_ALL',
    data: '...',
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

[+]Action Creator: 同一ActionCreator对应多种Action情况
```
export function showAll(data) {
  return (dispatch) => {
    dispatch(showAll(data));
  }
}

export function getUpdate(data) {
  return (dispatch) => {
    dispatch(getUpdate(data));
  }
}

export function getSelect(data) {
  return (dispatch) => {
    dispatch(getSelect(data));
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
const initialState = {
  test: null,
  fa: null,
  update: null,
  select: null
}

export function update(state = initialState, action) {
  // action.type...
  switch(action.type) {
    case actionTypes.UPDATE:
      return {...state, update: action.update}
    case actionTypes.SELECT:
      return {...state, select: action.select}
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
...
// combineReducer后, 此时reducer的命名则为state的属性之一(combineReducer决定state的结构)
export default combineReducer({
  update,
  select,
  system,
  nav,
  ...
});

// 此时state: {update, select, system, nav, ...}
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
import { bindActionCreators } from 'redux';
const mapDispatchToProps = dispatch => {
  getUpdate: update => dispatch(getUpdate(update)),
  getSelect: select => dispatch(getSelect(select)),
  // 使用action creator
  moreAction: bindActionCreator(oneOfActionCreator, dispatch)
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

