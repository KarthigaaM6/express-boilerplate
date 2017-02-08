import React from 'react';
import ReactDOM from 'react-dom';

export class SearchBox extends React.Component {
  static defaultProps = {
  }
  constructor() {
      super();
      this.state = {
        id: '',
        cuisine: ''
      }
      this.onSearchClick = this.onSearchClick.bind(this);
      this.changeID = this.changeID.bind(this);
      this.changeCuisine = this.changeCuisine.bind(this);
  }
  changeID(e) {
    // this.props.id = e.target.value;
    this.setState({
      id: e.target.value
    });
  }
  changeCuisine(e) {
    // this.props.cuisine = e.target.value;
    this.setState({
      cuisine: e.target.value
    });
  }
  onSearchClick() {
    let id = this.state.id;
    let cuisine = this.state.cuisine;
    this.props.onSearch(id, cuisine);
    this.setState({
      id: '',
      cuisine: ''
    });
  }
  render() {
    let divStyle = {
      marginTop: '10px'
    }
      return (
        <div className='ui one column center aligned column grid position' style={divStyle}>
          <div className='ui input'>
            <input type='text' placeholder='enter a city id' onChange={this.changeID} value={this.props.id}/>
            <input type='text' placeholder='enter a cuisine' onChange={this.changeCuisine} value={this.props.cuisine}/>
          </div>
          <button className='ui button' onClick={this.onSearchClick.bind(this)}>search</button>
        </div>
      )
  }
}
