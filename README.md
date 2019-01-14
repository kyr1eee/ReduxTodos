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
  return {
    ...state,
    newData,
  }
}
```
