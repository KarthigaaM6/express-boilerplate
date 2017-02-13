var mongoose = require('mongoose');

var restaurantSchema = new mongoose.Schema({
    _id: String,
    name: String,
    image: String,
    rating: String,
    address: String,
    comments: String
});

const Restaurant = mongoose.model('restaurant', restaurantSchema);

module.exports = Restaurant;
