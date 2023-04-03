var express = require("express");
var router = express.Router();
const { createClient } = require('@supabase/supabase-js')
const supabase = createClient('https://nshlddbkhwgpiognzrjt.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zaGxkZGJraHdncGlvZ256cmp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg3NDYxMTEsImV4cCI6MTk5NDMyMjExMX0.xNAEXBHYIhFUC10TtviXfLecargz2Yqr9cyFCM0Ir0k')


router.post("/",async function(req,res) {
    console.log(req.body)
    const userid = req.body.userid 
    const email = req.body.email
    console.log(userid,email)
    const timestamp = req.body.confirmed_at
    const { error } = await supabase
    .from('users')
    .update({ code: userid })
    .eq('email', email)

    if (error){
        console.log(error)
        res.status(401).json({error: "Bad login"})
    }
})

module.exports = router
