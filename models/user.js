const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        minLength: 3,
        required: true
    }
}, {
    timestamps: true,
    toJSON: {
        transform: function (doc, ret) {
            delete ret.password
            return ret
        }
    }
})

userSchema.pre('save', async function (next) {
    // this is referring to the user document 
    if (!this.isModified('password')) return next()
    //update the password with a new computer hash
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS)
})

module.exports = mongoose.model('User', userSchema);