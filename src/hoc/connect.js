// connect的参数:
// 参数一:函数
// 参数二:函数
// 返回值:函数 => 高阶组件
import { PureComponent } from 'react'
import store from '../store'

export default function connect(mapStateToProps,mapDispatchToProps){
  // 高阶组件:函数
  return function(WrapperComponent){
    class NewComponent extends PureComponent {
      constructor(props){
        super(props)

        this.state = mapStateToProps(store.getState())
      }

      componentDidMount(){
        store.subscribe(()=>{
          // this.forceUpdate()
          this.setState(mapStateToProps(store.getState()))
        })
      }

      componentWillUnmount(){
        this.unsubscribe()
      }


      render(){
        const stateObj = mapStateToProps(store.getState())
        const dispatchObj = mapDispatchToProps(store.dispatch)

        return <WrapperComponent {...this.props} {...stateObj} {...dispatchObj}/>
      }
    }

    return NewComponent
  }
}