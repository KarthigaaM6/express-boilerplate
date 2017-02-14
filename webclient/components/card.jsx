import React from 'react';
import {Card, Image} from 'semantic-ui-react';
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
      this.props.onActionOne(this.props._id, comments, this.props.index);
    }
  }
  actionTwo(){
    this.props.onActionTwo(this.props._id, this.props.index);
  }
  render() {
    let imageStyle = {
      height: '200px'
    }
    let contentDesc;
    if(this.props.cardFor === 'home') {
      contentDesc = <Card.Description>{this.props.address}</Card.Description>;
    } else if(this.props.cardFor === 'favorites') {
      contentDesc = (
        <Card.Description>
          <b>Address: </b> {this.props.address}
          <br/>
          <b>Comments: </b> {this.props.comments}
        </Card.Description>
      );
    }
      return(
        <Card>
          <Image src={this.props.image} style={imageStyle}/>
          <Card.Content>
            <Card.Header>{this.props.name}</Card.Header>
            {contentDesc}
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

RestaurantCard.propTypes = {
  _id: React.PropTypes.string,
  index: React.PropTypes.number,
  name: React.PropTypes.string,
  image: React.PropTypes.string,
  rating: React.PropTypes.string,
  address: React.PropTypes.string,
  comments: React.PropTypes.string,
  cardFor: React.PropTypes.string,
  actionOne: React.PropTypes.string,
  actionTwo: React.PropTypes.string,
  onActionOne: React.PropTypes.func,
  onActionTwo: React.PropTypes.func
}
