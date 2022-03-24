const mongoose = require("mongoose");
const {Schema} = mongoose;

const commentSchema = new Schema({
    author: {type: String, default: "Anonymous"},
    rant: {type: Boolean, default: false},
    stars: {type: Number, min: 1, max: 5, required: true},
    content: {type: String, default: ""},
});

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
