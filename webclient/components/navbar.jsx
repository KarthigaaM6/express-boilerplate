import React from 'react';
import {Link} from 'react-router';
import {Icon, Menu} from 'semantic-ui-react';

export class NavBar extends React.Component {
  constructor(){
    super();
  }
  render(){
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
      </Menu>
    );
  }
}
