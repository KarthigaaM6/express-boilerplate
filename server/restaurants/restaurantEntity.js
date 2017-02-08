var mongoose = require('mongoose');

var restaurantSchema = new mongoose.Schema({
    _id: Number,
    name: String,
    address: [
        {
            _id: Number,
            city: String,
            state: String
        }
    ]
});

const Restaurant = mongoose.model('restaurant', restaurantSchema);

module.exports = Restaurant;
