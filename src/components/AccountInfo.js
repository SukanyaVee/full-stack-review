import React, { Component } from 'react';
import {connect} from 'react-redux';

class AccountInfo extends Component {
  render() {
    const user = this.props.user;//needs curly braces if assigning as {user}=this.props
    return (
      <div>
          Account Info
          <div>
            You are logged in as: {user.name}<br/>
            Your email is: {user.email}<br/>
            Smile! {user.pic}
          </div>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps)(AccountInfo);