import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory, Route, Router, IndexRoute} from 'react-router';
import {NavBar} from './components/NavBar';
import {Home} from './components/home';
import {Favorites} from './components/favorites';
import {LoginForm} from './components/login';

class MainComp extends React.Component {
  constructor(){
    super();
  }
  render(){
    return(
      <div>
        <NavBar/>
        <br/><br/>
        {this.props.children}
      </div>
    );
  }
}

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={LoginForm}/>
    <Route component={MainComp}>
      <Route path="/home" component={Home}/>
      <Route path="/favorites" component={Favorites}/>
    </Route>
  </Router>, document.getElementById('app'));
