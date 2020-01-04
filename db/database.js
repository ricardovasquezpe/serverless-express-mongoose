const mongoose = require('mongoose')
var mongoDB = 'mongodb+srv://admin:admin@cluster0-tmji7.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoDB)