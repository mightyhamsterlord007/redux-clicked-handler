import React, { Component } from 'react'
import HomeView from './HomeView';
import { connect } from 'react-redux';
import { clickMeNow } from '../actions';

class Home extends Component {

  handleClick = () => {
    this.props.clickMeNow();
  }


  render() {

  

    return (
      <div style={{marginTop: 50}}>
        <button onClick={this.handleClick}>Clicked</button> 
        {this.props.clickedCount.timesClicked}
        <HomeView />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  clickedCount: state.action
});

export default connect(mapStateToProps, { clickMeNow })(Home);