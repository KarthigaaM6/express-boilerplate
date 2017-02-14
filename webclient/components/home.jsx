import React from 'react';
import {apikey} from '../zomato.jsx';
import {SearchBox} from './searchbox.jsx';
import {DisplayBox} from './displaybox.jsx';

export class Home extends React.Component {
    constructor() {
        super();
        this.state = {
					jsonArray: [],
          error: ''
        };
				this.getRestaurantData = this.getRestaurantData.bind(this);
    }
		getRestaurantData(id, cuisine) {
			$.ajax({
				url: `https://developers.zomato.com/api/v2.1/search?
							\entity_id=${id}&entity_type=city&q=${cuisine}`,
				type: 'GET',
				beforeSend: function(request) {
          this.setState({
						jsonArray: []
					});
					request.setRequestHeader('user-key', apikey);
				}.bind(this),
				success: function(data) {
					this.setState({
						jsonArray: data.restaurants
					});
				}.bind(this),
        error: function(error) {
					this.setState({
						error: error
					});
				}.bind(this)
			});
		}
    render() {
        return (
					<div>
						<SearchBox onSearch={this.getRestaurantData} />
						<DisplayBox arr={this.state.jsonArray} dataFrom='home'/>
            <h3>{this.state.error}</h3>
					</div>
        );
    }
}
