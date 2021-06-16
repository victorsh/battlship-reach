import React from 'react'

import { connect } from 'react-redux'
import { actions } from 'redux'

const mapStateToProps = state => {
  return { test1: state.test1 }
}

const mapDispatchToProps = dispatch => {
  return {
    updateState: state => state
  }
}

class BtestConnected extends React.Component {
  constructor(props) {
    super(props)
  }

  async componentDidMount() {

  }

  render() {
    return (
      <div>
        <button>cleek</button>
      </div>
    )
  }
}

const Btest = connect(mapStateToProps, mapDispatchToProps)(BtestConnected)

export default Btest