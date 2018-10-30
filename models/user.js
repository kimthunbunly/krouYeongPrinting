const mongoose = require('mongoose');
const Schema  = mongoose.Schema;
require('mongoose-type-email');

const UserSchema = new Schema({
    username: {
        type : String,
        required: false,
        unique: true
    },
    email: {
        type: mongoose.SchemaTypes.Email,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
         required: false
        },
    address: {
        type: String,
        required: false
    },
    country: {
        type: String,
        required: false
    },
    postCode: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    },
    role: {
        type: String,
        required: false,
        default: 'user',
        enum: ['user', 'partner', 'clerk', 'developer', 'admin']
    },
    online: {
      type: Boolean
    }
});

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

UserSchema.pre('save', async function(next) {
        let schema = this;
        if(schema.password.length >= 6) {
            if(schema.isModified('password')) {
                let hash = await bcrypt.hash(schema.password, 10);
                schema.password = hash;

                next();
            }
        } else {
            const err = new Error('password must be at least 6 characters.');
            next(err);
        }

    });

UserSchema.methods.genToken = function() {
        let token = jwt.sign({ _id: this._id, role: this.role }, 'jwtPrivateKey', { expiresIn: "1d"});
        return token;
    }

const User = module.exports = mongoose.model('User', UserSchema);
