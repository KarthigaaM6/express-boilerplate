import React from 'react';
import ReactDOM from 'react-dom';
import {Input, Button, Icon} from 'semantic-ui-react';

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
          <Input placeholder='enter a city id' onChange={this.changeID} value={this.props.id}/>
          <Input placeholder='enter a cuisine' onChange={this.changeCuisine} value={this.props.cuisine}/>
          <Button animated onClick={this.onSearchClick.bind(this)}>
            <Button.Content visible>search</Button.Content>
            <Button.Content hidden>
              <Icon name='right arrow' />
            </Button.Content>
          </Button>
        </div>
      )
  }
}
