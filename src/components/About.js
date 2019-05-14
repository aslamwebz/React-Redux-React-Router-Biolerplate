import React, { Component, useState } from 'react'
import history from '../history'

const About = props => {

const clickhandler = () => {
    history.push('/')
}

  return (
    <div>
      <h1>About</h1>
      <button class="btn" onClick={clickhandler}>
              Notification <span class="badge badge-primary">Home</span>
      </button>
    </div>
  )
}

export default About