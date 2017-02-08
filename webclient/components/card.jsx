import React from 'react';
import ReactDOM from 'react-dom';
import {Card, Image} from 'semantic-ui-react';
export class RestaurantCard extends React.Component {
  static defaultProps = {
    image: '',
    name: '',
    address: ''
  }
  constructor() {
      super();
  }
  render() {
    let imageStyle = {
      height: '200px'
    }
    return (
      <Card>
        <Image src={this.props.image} style={imageStyle}/>
        <Card.Content>
          <Card.Header>{this.props.name}</Card.Header>
          <Card.Description>{this.props.address}</Card.Description>
        </Card.Content>
      </Card>
    )
  }
}
