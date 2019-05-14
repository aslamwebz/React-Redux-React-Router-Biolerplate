import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchTest } from '../actions/testActions'

class Dashboard extends Component {
  render() {
    console.log(this.props.test)
    return (
      <div>
        Dashboard
        <Link to="/about">About</Link>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  test:state.test
})


export default connect(mapStateToProps, {fetchTest})(Dashboard)