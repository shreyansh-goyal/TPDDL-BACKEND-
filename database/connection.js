const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/tpddlUserReports', {useNewUrlParser: true,connectTimeoutMS: 100000,poolSize:100,socketTimeoutMS:1000000});
module.exports=mongoose;