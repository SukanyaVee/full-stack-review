import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class AccountInfo extends Component {
  render() {
    const user = this.props.user;//needs curly braces if assigning as {user}=this.props
    return (
      <div>
          Account Info
          {user && <div>
            You are logged in as: {user.name}<br/>
            Your email is: {user.email}<br/>
            Smile for your pic! {user.pic}
          </div>}
          {!user && <p>You must login first <Link to="/">Login</Link></p>}
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