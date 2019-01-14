## redux

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

[+]subscribe : 设置监听函数,state一旦变化则调用该函数.store.subscribe返回一个函数,调用则解除监听
```
// 设置监听函数
let unsubscribe = store.subscribe(() => { console.log(store.getState()) });
// 解除监听
unsubscribe();
```
