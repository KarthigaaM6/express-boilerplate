import React from 'react';
import ReactDOM from 'react-dom';

export class Card extends React.Component {
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
      <div className="ui card">
        <div className="image">
          <img src={this.props.image} style={imageStyle}/>
        </div>
        <div className="content">
          <a className="header">{this.props.name}</a>
          <div className="description">{this.props.address}</div>
        </div>
      </div>
    )
  }
}
