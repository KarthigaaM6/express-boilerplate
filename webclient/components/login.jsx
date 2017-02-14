import React from 'react';
import {Input, Button, Grid} from 'semantic-ui-react';
import {browserHistory} from 'react-router';

export class LoginForm extends React.Component {
  constructor() {
      super();
      this.state = {
        name: '',
        password: ''
      }
      this.login = this.login.bind(this);
      this.changeName = this.changeName.bind(this);
      this.changePassword = this.changePassword.bind(this);
  }
  changeName(e) {
    this.setState({
      name: e.target.value
    });
  }
  changePassword(e) {
    this.setState({
      password: e.target.value
    });
  }
  login() {
    let name = this.state.name;
    let password = this.state.password;
    let obj = {"username": name, "password": password};

    $.ajax({
      url: 'http://localhost:8080/users/login',
      type: 'POST',
      dataType: 'json',
      data: obj,
      success: function(data) {
        browserHistory.push('/home');
        console.log('success: ', data);
      },
      error: function(err) {
        alert('invalid username and password');
        console.log('error: ', err);
      }
    });
  }
  render() {
    let style = {
      marginTop: '50px'
    };
    return (
      <Grid centered style={style}>
        <Input placeholder='user name...' onChange={this.changeName} value={this.state.name} />
        <Input type='password' placeholder='password...' onChange={this.changePassword} value={this.state.password} />
        <Button onClick={this.login}>Sign In</Button>
      </Grid>
    );
  }
}
