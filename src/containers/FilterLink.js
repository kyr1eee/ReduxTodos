import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Link from '../components/Link';
import * as demoCreator from '../actions/thunks/demo'

/*
    如何把当前 Redux store state 映射到展示组件的 props 
    Link.props = {...Link.props, active}
    第二个参数 ownProps 可调用连接组件的props进行操作
*/
const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
})

/*
    dispatch action 到 props
    props.onClick = () => dispatch(action(type))
    事件过多,可用bindActionCreators绑定简化,以下creator用于演示,并无实际功能
    props.demo = demoCreator = {action1: func, action2: func2}
*/
const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
    demo: demoCreator
})

// 生成绑定了redux的新组件
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)