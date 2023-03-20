import React from 'react'
import axios from 'axios';
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { applications_id : '', solar_developers_id :'',applications_code  : '',applications_name  :'',status : '',
    full_name_representative :'',position_representative :'',birth_date_representative :'',phone_number_representative :'', email_representative :'',linkedin_representative :'',company_tax_id :'',
    company_name :'',type_company : '',web_company :'',logo_company : '',linkedin_company : '', country :'',region : '',
    city :'',postal_code : '',physical_address :'',portfolio_name : '' ,numbers_projects:'' ,smes : '',factories : '',
    homes: '' ,other: '' ,other_specified : '',total_capital_required: '' ,covered_percentage_required: '' ,about_them : '',certified_experience: '' ,
    tell_us_about_experience: '' ,media : '',duration_in_months : '',estimated_date_build: '' ,public_or_private : '',is_governmental_support : '',description_governmental_support : '',
    creation_date : ''  
    }
  }
 
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }
 
  handleSubmit = (event) => {
    alert('A form was submitted: ' + this.state);
 
    axios.post('http://localhost:5000/store-data', {body: JSON.stringify(this.state)
    }).then(function(response) {
        console.log(response)
        return response.json();
      });
 
    event.preventDefault();
}
 
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
        applications_id  :
          <input type="number" value={this.state.value} name="application_id" onChange={this.handleChange} />
        </label>
        <br/>
        <label>
        solar_developers_id :
          <input type="number" value={this.state.value} name="solar_developers_id" onChange={this.handleChange} />
        </label>
        <label>
        applications_code  :
          <input type="number" value={this.state.value} name="applications_code" onChange={this.handleChange} />
        </label>
        <label>
        applications_name  :
          <input type="text" value={this.state.value} name="applications_name" onChange={this.handleChange} />
        </label>
        <label>
        status :
          <input type="text" value={this.state.value} name="status" onChange={this.handleChange} />
        </label>
        <label>
        full_name_representative :
          <input type="text" value={this.state.value} name="full_name_representative" onChange={this.handleChange} />
        </label>
        <label>
        position_representative :
          <input type="text" value={this.state.value} name="position_representative" onChange={this.handleChange} />
        </label>
        <label>
        birth_date_representative :
          <input type="date" value={this.state.value} name="birth_date_representative" onChange={this.handleChange} />
        </label>
        <label>
        phone_number_representative :
          <input type="text" value={this.state.value} name="phone_number_representative" onChange={this.handleChange} />
        </label>
        <label>
        email_representative :
          <input type="text" value={this.state.value} name="email_representative" onChange={this.handleChange} />
        </label>
        <label>
        linkedin_representative :
          <input type="text" value={this.state.value} name="linkedin_representative" onChange={this.handleChange} />
        </label>
        <label>
        company_tax_id :
          <input type="text" value={this.state.value} name="company_tax_id" onChange={this.handleChange} />
        </label>
        <label>
        company_name :
          <input type="text" value={this.state.value} name="company_name" onChange={this.handleChange} />
        </label>
        <label>
        type_company   :
          <input type="text" value={this.state.value} name="type_company" onChange={this.handleChange} />
        </label>
        <label>
        web_company :
          <input type="text" value={this.state.value} name="web_company" onChange={this.handleChange} />
        </label>
        <label>
        logo_company :
          <input type="text" value={this.state.value} name="logo_company" onChange={this.handleChange} />
        </label>
        <label>
        linkedin_company   :
          <input type="text" value={this.state.value} name="linkedin_company" onChange={this.handleChange} />
        </label>
        <label>
        country :
          <input type="text" value={this.state.value} name="country" onChange={this.handleChange} />
        </label>
        <label>
        region :
          <input type="text" value={this.state.value} name="region" onChange={this.handleChange} />
        </label>
        <label>
        city :
          <input type="text" value={this.state.value} name="city" onChange={this.handleChange} />
        </label>
        <label>
        postal_code :
          <input type="text" value={this.state.value} name="postal_code" onChange={this.handleChange} />
        </label>
        <label>
        physical_address :
          <input type="text" value={this.state.value} name="physical_address" onChange={this.handleChange} />
        </label>
        <label>
        portfolio_name :
          <input type="text" value={this.state.value} name="portfolio_name" onChange={this.handleChange} />
        </label>
        <label>
        numbers_projects :
          <input type="text" value={this.state.value} name="numbers_projects" onChange={this.handleChange} />
        </label>
        <label>
        smes :
          <input type="text" value={this.state.value} name="smes" onChange={this.handleChange} />
        </label>
        <label>
        factories  :
          <input type="text" value={this.state.value} name="factories" onChange={this.handleChange} />
        </label>
        <label>
          fac:
          <input type="text" value={this.state.value} name="fac" onChange={this.handleChange} />
        </label>
        <label>
          homes:
          <input type="text" value={this.state.value} name="homes" onChange={this.handleChange} />
        </label>
        <label>
          other  :
          <input type="text" value={this.state.value} name="other" onChange={this.handleChange} />
        </label>
        <label>
          other_specified:
          <input type="text" value={this.state.value} name="other_specified" onChange={this.handleChange} />
        </label>
        <label>
        total_capital_required:
          <input type="text" value={this.state.value} name="total_capital_required" onChange={this.handleChange} />
        </label>
        <label>
          covered_percentage_required:
          <input type="text" value={this.state.value} name="covered_percentage_required" onChange={this.handleChange} />
        </label>
        <label>
        about_them :
          <input type="text" value={this.state.value} name="about_them" onChange={this.handleChange} />
        </label>
        <label>
        certified_experience :
          <input type="text" value={this.state.value} name="certified_experience" onChange={this.handleChange} />
        </label>
        <label>
        tell_us_about_experience :
          <input type="text" value={this.state.value} name="tell_us_about_experience" onChange={this.handleChange} />
        </label>
        <label>
        media :
          <input type="text" value={this.state.value} name="media" onChange={this.handleChange} />
        </label>
        <label>
        duration_in_months :
          <input type="text" value={this.state.value} name="duration_in_months" onChange={this.handleChange} />
        </label>
        <label>
        estimated_date_build :
          <input type="text" value={this.state.value} name="estimated_date_build" onChange={this.handleChange} />
        </label>
        <label>
        public_or_private :
          <input type="text" value={this.state.value} name="public_or_private" onChange={this.handleChange} />
        </label>
        <label>
        is_governmental_support :
          <input type="text" value={this.state.value} name="is_governmental_support" onChange={this.handleChange} />
        </label>
        <label>
        description_governmental_support  :
          <input type="text" value={this.state.value} name="description_governmental_support" onChange={this.handleChange} />
        </label>
        <label>
        creation_date  :
          <input type="time" value={this.state.value} name="creation_date" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
 
export default MyForm;