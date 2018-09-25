import React, { Component } from 'react'

 class Home extends Component {

  state = {
      clicked: 0
  }

  render() {
    return (
      <div style={{marginTop: 50}}>
        <button onClick={}>Clicked</button> {this.state.clicked}
      </div>
    )
  }
}

export default Home;