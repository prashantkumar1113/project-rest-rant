const mongoose = require("mongoose");
const {Schema} = mongoose;

const placeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    pic: {type: String, default: "http://placekitten.com/350/350"},
    cuisines: {type: String, required: true},
    city: {type: String, default: "Anytown"},
    state: {type: String, default: "USA"},
    founded: {
        type: Number,
        min: [1673, "Surely not that old?!"],
        max: [new Date().getFullYear() + 1, "This is the future!"],
    },
    comments: [{type: Schema.Types.ObjectId, ref: "Comment"}],
});

placeSchema.methods.showEstablished = function () {
    return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`;
};

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
