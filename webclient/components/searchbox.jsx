import React from 'react';
import {Input, Button} from 'semantic-ui-react';

export class SearchBox extends React.Component {
  constructor() {
      super();
      this.state = {
        id: '',
        cuisine: ''
      };
      this.onSearchClick = this.onSearchClick.bind(this);
      this.changeID = this.changeID.bind(this);
      this.changeCuisine = this.changeCuisine.bind(this);
  }
  changeID(e) {
    this.setState({
      id: e.target.value
    });
  }
  changeCuisine(e) {
    this.setState({
      cuisine: e.target.value
    });
  }
  onSearchClick() {
    let id = this.state.id;
    let cuisine = this.state.cuisine;
    if(id.trim() === '' || cuisine.trim() === '') {
      alert('ensure that u hav entered an id and a cuisine');
    } else {
      this.setState({
        id: '',
        cuisine: ''
      });
      this.props.onSearch(id, cuisine);
    }
  }
  render() {
    return (
      <div className='ui center aligned grid position'>
        <Input placeholder='city id...' onChange={this.changeID} value={this.state.id}/>
        <Input placeholder='cuisine...' onChange={this.changeCuisine} value={this.state.cuisine}/>
        <Button onClick={this.onSearchClick.bind(this)}>search</Button>
      </div>
    );
  }
}
