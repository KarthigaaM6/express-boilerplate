import React from 'react';
import ReactDOM from 'react-dom';
import {apikey} from '../zomato.jsx';
import {SearchBox} from './searchbox.jsx';
import {DisplayBox} from './displaybox.jsx';

export class Home extends React.Component {
		static defaultProps = {
		}
    constructor() {
        super();
        this.state = {
					jsonArray: []
        };
				this.getRestaurantData = this.getRestaurantData.bind(this);
    }
		getRestaurantData(id, cuisine) {
			$.ajax({
				url: `https://developers.zomato.com/api/v2.1/search?entity_id=${id}&entity_type=city&q=${cuisine}`,
				type: 'GET',
				beforeSend: function(request) {
					request.setRequestHeader('user-key', apikey);
				},
				success: function(data) {
					this.setState({
						jsonArray: data.restaurants
					})
				}.bind(this)
			});
		}
    render() {
        return (
					<div>
						<SearchBox onSearch={this.getRestaurantData} />
						<DisplayBox arr={this.state.jsonArray} dataFrom='home'/>
					</div>
        )
    }
}
