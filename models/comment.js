const mongoose = require('mongoose');
const Schema  = mongoose.Schema;
require('mongoose-type-email');

const CommentSchema = new Schema({
    email: {
        type: mongoose.SchemaTypes.Email,
        unique: true,
        required: true
    },
    phone: {
        type: String,
        required: false
    },
    message: {
        type: String,
        required: true
    },
    name: {
      type: String,
      required: false
    }
});

module.exports = mongoose.model('Comment', CommentSchema);
