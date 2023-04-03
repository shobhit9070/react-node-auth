var express = require("express");
var router = express.Router();
const { createClient } = require('@supabase/supabase-js')
const supabase = createClient('https://nshlddbkhwgpiognzrjt.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zaGxkZGJraHdncGlvZ256cmp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg3NDYxMTEsImV4cCI6MTk5NDMyMjExMX0.xNAEXBHYIhFUC10TtviXfLecargz2Yqr9cyFCM0Ir0k')


async function user_data_insert (data) {

    
}

router.post('/',async function(req,res) {
    // console.log(req.body)
    // const user_id = req.body.x.id
    const email = req.body.email
    const password = req.body.password
    // const timestamp = req.body.x.created_at
    // console.log(typeof user_id)
    const timestamp = new Date()
    const { data, error } = await supabase
      .from('users')
      .insert([
        { email: email,password:password,email_updates:true,accepted_terms_conditions:true,is_verified:true,creation_date_time:timestamp
        }
      ])
    
    if (error){
        console.log(error)
    }
    else{
        console.log(req.body)
        res.send(JSON.stringify({"status": 200, "error": null, "response": data}));
    }
    



})  

module.exports = router
