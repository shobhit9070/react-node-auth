var express = require("express");
var router = express.Router();
const { createClient } = require('@supabase/supabase-js')
const supabase = createClient('https://nshlddbkhwgpiognzrjt.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zaGxkZGJraHdncGlvZ256cmp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg3NDYxMTEsImV4cCI6MTk5NDMyMjExMX0.xNAEXBHYIhFUC10TtviXfLecargz2Yqr9cyFCM0Ir0k')


async function application_data_insert(data) {
    let datas = (JSON.parse(data['name']['body']))
    let aid = datas.application_id
    let sid = data.solar_developers_id
    let ac = data.application_code
    let status = data.status
    let name = data.full_name_representative
    let email = data.email_representative
    let phone = data.phone_representative
    let address = data.address_representative
    let city = data.city
    let pos = data.position_representative
    let country = data.country
    let sme = data.smes
    let bd = data.birth_date_representative
    let link = data.linkedin_representative
    let cti = data.company_tax_id
    let cti_name = data.company_name
    let tcmp = data.type_company
    let wcmp = data.web_company
    let lcmp = data.logo_company
    let linkcmp = data.linkedin_company
    let reg = data.region
    let postal = data.postal_code
    let pyd = data.physical_address



    const { datass, error } = await supabase
    .from('addresses')
    .insert([{application_id:aid,solar_developers_id:sid,application_code:ac,application_name:"shobhit",status:status,
    full_name_representative:name,email_representative:email,phone_number_representative:phone,address_representative:address,linkedin_representative : "shobhitlin",company_tax_id : "1234asd",company_name : "shobhitc", city:city,
    type_company :tcmp, web_company:wcmp,logo_company:lcmp,linkedin_company:linkcmp,position_representative:pos, country:country,smes:sme,
    region:reg,postal:postal,physical_address:pyd,birth_date_representative:bd}])

}
// console.log(supabase)



router.post("/",async function(req, res)  {
    console.log(req.body)
    const contactInfo = req.body.contactInformation
    const companyInfo = req.body.companyInformation
    const portfolioInfo = req.body.portfolioInformation

    // const fullname = contactInfo.fullname
    // const position = contactInfo.position
    // const dob = contactInfo.dob
    // const phoneNo = contactInfo.phoneNumber 
    // const email = contactInfo.email
    // const linkedIn = contactInfo.linkedinProfile
    // const taxId = companyInfo.taxIdNumber
    // const compName = companyInfo.companyName 
    // const compType = companyInfo.companyType
    // const compWeb = companyInfo.webpage

    console.log(contactInfo)
    console.log(companyInfo)
    console.log(portfolioInfo)

  // discuss how to store the pdfs and the images in the database

    res.send(JSON.stringify({"status": 200, "error": null}));
  })


module.exports = router
