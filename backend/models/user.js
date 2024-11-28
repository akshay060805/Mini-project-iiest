const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://vanamaakshay06:akki8464@startupsphere.skqyr.mongodb.net/?retryWrites=true&w=majority&appName=startupsphere/startupsphere')

const userSchema = mongoose.Schema({
    email: String,
    username: String,
    password: String,
    bookmark: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'addstartup'
        }
    ]
})

module.exports = mongoose.model("user", userSchema);