const mongoose = require('mongoose');


const UserAuthor = new mongoose.Schema({
    fname:{ type: String, required:true},
    lname:{ type: String, required:true},
    orgname:{ type: String, unique:true},
    email:{ type: String, required:true, unique:true},
    password:{ type: String, required:true},
},{collection: 'author-data'})

const model = mongoose.model('userData',UserAuthor)




module.exports=model