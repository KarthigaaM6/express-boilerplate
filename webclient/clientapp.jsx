import React from 'react';
import ReactDOM from 'react-dom';
import {SearchBox} from './components/searchbox.jsx';
import {DisplayBox} from './components/displaybox.jsx';

class MainComponent extends React.Component {
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
					request.setRequestHeader('user-key', '9351c23066e0ae833d7602c214e1ae98');
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
						<DisplayBox arr={this.state.jsonArray} />
					</div>
        )
    }
}
ReactDOM.render(
    <MainComponent/>, document.getElementById('mountapp'));
