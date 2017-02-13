import React from 'react';
import ReactDOM from 'react-dom';
import {SearchBox} from './searchbox.jsx';
import {DisplayBox} from './displaybox.jsx';
import {Grid, Button} from 'semantic-ui-react';

export class Favorites extends React.Component {
    constructor() {
        super();
        this.state = {
					jsonArray: []
        };
				this.reRenderAfterDeletion = this.reRenderAfterDeletion.bind(this);
    }
		reRenderAfterDeletion(index) {
			let newJsonArray = this.state.jsonArray;
			delete newJsonArray[index];
			this.setState({
				jsonArray: newJsonArray
			});
		}
		componentDidMount() {
			$.ajax({
				url: `http://localhost:8080/restaurants/displayall`,
				type: 'GET',
				success: function(data) {
					this.setState({
						jsonArray: data
					});
				}.bind(this)
			});
		}
    render() {
			console.log('favs rendered');
        return (
					<div>
						<DisplayBox arr={this.state.jsonArray} dataFrom='favorites' onParentCalled={this.reRenderAfterDeletion}/>
					</div>
        )
    }
}
