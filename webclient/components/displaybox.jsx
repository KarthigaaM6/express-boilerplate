import React from 'react';
import ReactDOM from 'react-dom';
import {Card} from './card.jsx';

export class DisplayBox extends React.Component {
  static defaultProps = {
    arr: []
  }
  constructor() {
      super();
  }
  render() {
      let divStyle = {
        marginTop: '50px'
      }

      let cards = this.props.arr.map(function(card){

        // set default image for restaurants without image
        if(card.restaurant.featured_image === '') {
          card.restaurant.featured_image = 'data:image/png;base64,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';
        }
        return (
          <Card name={card.restaurant.name} address={card.restaurant.location.address} image={card.restaurant.featured_image} />
        );
      });

      return (
        <div className="ui four stackable cards" style={divStyle}>
          {cards}
        </div>
      );
  }
}
