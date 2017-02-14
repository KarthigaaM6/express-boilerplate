import React from 'react';
import {Link} from 'react-router';
import {Icon, Menu, Button} from 'semantic-ui-react';

export class NavBar extends React.Component {
  constructor() {
    super();
  }
  logout() {
     $.ajax({
       url:"http://localhost:8080/users/logout",
       type: 'GET',
       success: function(res)
       {
         if (typeof res.redirect == 'string')
         window.location.replace(window.location.protocol + "//" + window.location.host + res.redirect);
         console.log(res.responseText);
       }.bind(this),
       error: function(err)
       {
         alert("error occurred while logging out");
         console.log(err.responseText);
       }.bind(this)
     });
  }
  render() {
    return (
      <Menu icon>
        <Menu.Item>
          <Link to='/home'>
            <Icon name='home'/> Home
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/favorites'>
            <Icon name='heart'/> Favorites
          </Link>
        </Menu.Item>
        <Menu.Item position='right'>
          <Button onClick={this.logout.bind(this)} >
            Sign Out <Icon name='sign out'/>
          </Button>
        </Menu.Item>
      </Menu>
    );
  }
}
