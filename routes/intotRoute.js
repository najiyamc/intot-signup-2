const express = require("express");
const router = express.Router();
const intot = require("../models/intotModel");

router.route("/create").post((req,res)=>
{
    const name=req.body.name;
    const email=req.body.email;
    const psw=req.body.psw;
    const psw_repeat=req.body.psw_repeat;
    const newintot= new intot({
        name,
        email,
        psw,
        psw_repeat
    });
    newintot.save();
})


module.exports = router;