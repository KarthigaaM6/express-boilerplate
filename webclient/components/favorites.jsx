import React from 'react';
import {DisplayBox} from './displaybox.jsx';

export class Favorites extends React.Component {
    constructor() {
        super();
        this.state = {
					jsonArray: []
        };
        this.parentFunction = this.parentFunction.bind(this);
				this.reRenderAfterDeletion = this.reRenderAfterDeletion.bind(this);
        this.reRenderAfterCommenting = this.reRenderAfterCommenting.bind(this);
    }
    parentFunction(index, comments) {
      if(comments === undefined) {
        this.reRenderAfterDeletion(index);
      } else {
        this.reRenderAfterCommenting(index, comments);
      }
    }
		reRenderAfterDeletion(index) {
			let newJsonArray = this.state.jsonArray;
			delete newJsonArray[index];
			this.setState({
				jsonArray: newJsonArray
			});
		}
    reRenderAfterCommenting(index, comments) {
      this.state.jsonArray[index].comments = comments;
			this.setState({
				jsonArray: this.state.jsonArray
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
        return (
					<div>
						<DisplayBox arr={this.state.jsonArray} dataFrom='favorites' onParentCalled={this.parentFunction}/>
					</div>
        )
    }
}
