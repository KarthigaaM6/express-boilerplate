import React from 'react';
import ReactDOM from 'react-dom';
import {Icon, Button, Input} from 'semantic-ui-react';

export class ActionBar extends React.Component {
  static defaultProps = {
    actionOne: '',
    actionTwo: '',
    actionsFor: '',
    onActionOne: null,
    onActionTwo: null,
  }
  constructor() {
      super();
      this.state = {
        actionOneCompleted: false,
        actionTwoCompleted: false
      }
      this.actionOne = this.actionOne.bind(this);
      this.actionTwo = this.actionTwo.bind(this);
  }
  actionOne() {
    console.log('actionbar action one...');
    this.props.onActionOne();
    this.setState({
      actionOneCompleted: true
    });
  }
  actionTwo() {
    console.log('actionbar action two...');
    this.props.onActionTwo();
  }
  render() {
    let disabled = this.state.actionOneCompleted;

    if(this.props.actionsFor === 'home') {
      return (
        <div>
          <Button fluid color='green' onClick={this.actionOne} disabled={disabled}>
            {this.props.actionOne}
          </Button>
        </div>
      );
    } else if(this.props.actionsFor === 'favorites') {
      return (
        <div className='ui two buttons'>
          <Button color='twitter' onClick={this.actionOne}>{this.props.actionOne}</Button>
          <div className='or'></div>
          <Button color='red' onClick={this.actionTwo}>{this.props.actionTwo}</Button>
        </div>
      );
    }
  }
}
