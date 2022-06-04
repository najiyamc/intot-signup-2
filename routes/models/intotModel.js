const mongoose = require("mongoose");

const intotSchema={
    name:String,
    email:String,
    psw: String,
    psw_repeat:String

}
const intot = mongoose.model("intot",intotSchema);

module.exports = intot;