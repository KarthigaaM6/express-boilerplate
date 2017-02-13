import React from 'react';
import ReactDOM from 'react-dom';
import {Card, Image, Icon, Input} from 'semantic-ui-react';
import {ActionBar} from './actionbar.jsx';

export class RestaurantCard extends React.Component {
  static defaultProps = {
    _id: '',
    index: -1,
    name: '',
    image: '',
    rating: '',
    address: '',
    comments: 'Not commented yet...',
    cardFor: '',
    actionOne: '',
    actionTwo: '',
    onActionOne: null,
    onActionTwo: null
  }
  constructor() {
      super();
      this.actionOne = this.actionOne.bind(this);
      this.actionTwo = this.actionTwo.bind(this);
  }
  actionOne() {
    console.log('card action one...');
    if(this.props.cardFor === 'home') {
      let item = {
        _id : this.props._id,
        name : this.props.name,
        image : this.props.image,
        comments: this.props.comments,
        rating : this.props.rating,
        address : this.props.address
      };
      this.props.onActionOne(item);
    } else if(this.props.cardFor === 'favorites') {
      let comments = prompt('Enter your comments here');
      this.props.onActionOne(this.props._id, comments);
    }
  }
  actionTwo(){
    console.log('card action two...');
    this.props.onActionTwo(this.props._id, this.props.index);
  }
  render() {
    let imageStyle = {
      height: '200px'
    }
    if(this.props.cardFor === 'home') {
      return(
        <Card>
          <Image src={this.props.image} style={imageStyle}/>
          <Card.Content>
            <Card.Header>{this.props.name}</Card.Header>
            <Card.Description>{this.props.address}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <ActionBar
              actionsFor={this.props.cardFor}
              actionOne={this.props.actionOne}
              actionTwo={this.props.actionTwo}
              onActionOne={this.actionOne}
              onActionTwo={this.actionTwo}
            />
          </Card.Content>
        </Card>
      );
    } else if(this.props.cardFor === 'favorites') {
      return(
        <Card>
          <Image src={this.props.image} style={imageStyle}/>
          <Card.Content>
            <Card.Header>{this.props.name}</Card.Header>
            <Card.Description>
              <b>Address: </b> {this.props.address}
              <br/>
              <b>Comments: </b> {this.props.comments}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <ActionBar
              actionsFor={this.props.cardFor}
              actionOne={this.props.actionOne}
              actionTwo={this.props.actionTwo}
              onActionOne={this.actionOne}
              onActionTwo={this.actionTwo}
            />
          </Card.Content>
        </Card>
      );
    }
  }
}
