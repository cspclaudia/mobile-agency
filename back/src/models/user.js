const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const UserSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: "Digite um e-mail válido."
        },
        unique: true,
        lowercase: true
    },
    Phone: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true,
        select: false
    },
    UrlImage: {
        type: String,
        required: false
    },
    DateCreated: {
        type: Date,
        default: Date.now
    }
});

UserSchema.pre('save', function (next) {
    let user = this;
    if (!user.isModified('Password'))
        return next();
    bcrypt.hash(user.Password, 10, (err, bcrypt) => {
        user.Password = bcrypt;
        return next();
    });
});

mongoose.model("User", UserSchema);