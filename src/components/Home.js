import React, { Component } from 'react';
import logo from './logo.svg';
import Auth0Lock from 'auth0-lock';
import axios from 'axios';
import {connect} from 'react-redux';
import {login} from '../ducks/reducer';

class Home extends Component {
  constructor(){
    super(); 
    this.lock=null; 
    this.login = this.login.bind(this);
  }

  componentDidMount() {
    this.lock = new Auth0Lock(process.env.REACT_APP_AUTH0_CLIENT_ID, process.env.REACT_APP_AUTH0_DOMAIN);
    console.log('this.lock', this.lock);
    this.lock.on('authenticated', authResult => {
      this.lock.getUserInfo(authResult.accessToken, (error, user) => {
        axios.post('/login', { userId: user.sub }).then(response => {
          this.props.login(response.data.user);
          this.props.history.push('/private');
        })
      })
    })
  }

  login() {
    this.lock.show();
  }

  render() {
    return (
      <div>
          <img src={logo} className="logo"/>
          <div className="actions">
            <button onClick={this.login}>Log in</button>
          </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  login: login
}

export default connect(null, mapDispatchToProps)(Home); //can be used alternatively as (null, {login})