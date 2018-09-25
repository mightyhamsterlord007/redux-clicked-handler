//import React from 'react'

// const HomeView = (props) => {
//   return (
//     <div>
//       From Home HomeView    
//       <br />

//     </div>
//   )
// }

// export default HomeView;

import React, { Component } from 'react'
import { connect } from 'react-redux';

 class HomeView extends Component {
  render() {
    return (
      <div>
        {this.props.clickedCount.timesClicked}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  clickedCount: state.action
});


export default connect(mapStateToProps, null)(HomeView);
