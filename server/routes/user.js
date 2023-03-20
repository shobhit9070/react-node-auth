var express = require("express");
var router = express.Router();
const { createClient } = require('@supabase/supabase-js')
const supabase = createClient('https://nshlddbkhwgpiognzrjt.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zaGxkZGJraHdncGlvZ256cmp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg3NDYxMTEsImV4cCI6MTk5NDMyMjExMX0.xNAEXBHYIhFUC10TtviXfLecargz2Yqr9cyFCM0Ir0k')


async function user_data_insert (data) {

    
}

router.post('/',async function(req,res) {

})  

module.exports = router
