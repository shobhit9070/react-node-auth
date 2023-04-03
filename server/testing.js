var express = require("express");
var router = express.Router();
const { createClient } = require('@supabase/supabase-js')
const supabase = createClient('https://nshlddbkhwgpiognzrjt.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zaGxkZGJraHdncGlvZ256cmp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg3NDYxMTEsImV4cCI6MTk5NDMyMjExMX0.xNAEXBHYIhFUC10TtviXfLecargz2Yqr9cyFCM0Ir0k')

async function retrieve_data () {
   const { data, error } = await supabase
  .from('users')
  .select()
  .eq('email', 'ddbfe9ea-ff34-43cf-ae82-351a3a52d2e2')
  return {data,error}

}

retrieve_data().then(({data,error}) => {
    if (data){
        console.log(data.length)
    }
    else{
        console.log(error)
    }
})