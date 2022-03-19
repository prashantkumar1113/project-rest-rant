const mongoose = require("mongoose");
const {Schema} = mongoose;

const placeSchema = new Schema({
    name: {type: String, required: true},
    pic: String,
    cuisines: {type: String, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true},
    founded: Number,
});

module.exports = mongoose.model("Place", placeSchema);

// module.exports = [
//     {
//         name: "H-Thai-ML",
//         city: "Seattle",
//         state: "WA",
//         cuisines: "Thai, Pan-Asian",
//         pic: "/images/restaurants/dan-gold-E6HjQaB7UEA-unsplash.jpeg",
//     },
//     {
//         name: "Coding Cat Cafe",
//         city: "Phoenix",
//         state: "AZ",
//         cuisines: "Coffee, Bakery",
//         pic: "/images/restaurants/mgg-vitchakorn-vBOxsZrfiCw-unsplash.jpeg",
//     },
// ];
