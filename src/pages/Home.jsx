import React, { PureComponent } from 'react'
import {connect} from 'react-redux'

export class home extends PureComponent {
  render() {
    const { counter } = this.props

    return (
      <div>
        <h2>Home Counter:{counter}</h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter:state.counter.counter
})

export default connect(mapStateToProps)(home)