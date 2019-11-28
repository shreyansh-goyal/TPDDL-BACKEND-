const mongoose = require("mongoose");
const m = require('../database/connection');
var reportArray= m.Schema({
    CA_Number:{
        type:Number,
        required:true
        },
        length:{type:mongoose.Mixed},
        data:{}
})

module.exports =TPDDL_REPORTS= m.model("tpddl",reportArray);
