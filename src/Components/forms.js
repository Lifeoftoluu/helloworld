import React, { useState} from 'react'

function Form(){
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    city: '',
    state: '',
    zip: '',
});
const handleFirstNameInputChange = (event) => {
    event.persist();
    setValues((values) => ({
        ...values,
        firstName: event.target.value,
    }));
};
const handleLastNameInputChange = (event) => {
    event.persist();
    setValues((values) => ({
        ...values,
        lastName: event.target.value,
    }));
};

const handleEmailInputChange = (event) => {
    event.persist();
    setValues((values) => ({
        ...values,
        email: event.target.value,
    }));
};

const handleUsernameInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      username: event.target.value,
    }));
};

const handleCityInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      city: event.target.value,
    }));
};

const handleStateInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      state: event.target.value,
    }));
}

const handleZipInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      zip: event.target.value,
    }));
}

const [submitted, setSubmitted] = useState(false); 

const handleSubmit = (event) => {  
  const form = event.currentTarget
  if (form.checkValidity() === false) {
    event.preventDefault()
    event.stopPropagation()
  }
  else{
      setSubmitted(true)
  }
  
}
{
       
    
  
 
      
      
    
    return(
      <div className='formcontainer'>
        <form className="row g-3 needs-validation" onSubmit={handleSubmit} noValidate>
        <div className="col-md-4">
          <label htmlFor="validationCustom01" className="form-label">First name</label>
          <input type="text" className="form-control" id="validationCustom01" value={values.firstName} onChange={handleFirstNameInputChange} required></input>
          {submitted && !values.firstName && <span id="first-name-error">Please input first name</span>}          
          </div>
        
        <div className="col-md-4">
          <label htmlFor="validationCustom02" className="form-label">Last name</label>
          <input type="text" className="form-control" id="validationCustom02" value={values.lastName} onChange={handleLastNameInputChange} required></input>                              
          {submitted && !values.lastName && <span id="last-name-error">Please input last name</span>}
        </div>

        <div className="col-md-4">
          <label htmlFor="validationCustomUsername" className="form-label">Username</label>
          <div className="input-group has-validation">
            <span className="input-group-text" id="inputGroupPrepend">@</span>
            <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" value={values.username} onChange={handleUsernameInputChange} required></input>
            {submitted && !values.username && <span id="username-error">Please input username</span>}
          </div>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustomEmail" className="form-label">Email</label>
          <div className="input-group has-validation">
            <span className="input-group-text" id="inputGroupPrepend">@...com</span>
            <input type="email" className="form-control" id="validationCustomEmail" aria-describedby="inputGroupPrepend" value={values.email} onChange={handleEmailInputChange} required></input>
           {submitted && !values.email && <span id="email-error">Please input Email</span>}
        </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationCustom03" className="form-label">City</label>
          <input type="text" className="form-control" id="validationCustom03" value={values.city} onChange={handleCityInputChange} required></input>
          {submitted && !values.city && <span id="city-error">Please input City</span>}
        </div>
        <div className="col-md-3">
          <label htmlFor="validationCustom04" className="form-label">State</label>
          <select className="form-select" id="validationCustom04" value={values.state} onChange={handleStateInputChange} required>
            <option >Choose...</option>
            <option>...</option>
            <option>Abia</option>
            <option>Kwara</option>
          </select>
          {submitted && !values.state && <span id="state-error">Please input State</span>}
        </div>
        <div className="col-md-3">
          <label htmlFor="validationCustom05" className="form-label">Zip</label>
          <input type="text" className="form-control" id="validationCustom05" value={values.zip} onChange={handleZipInputChange}required></input>
          {submitted && ! values.zip && <span id="zip-error">Please input Zip</span>}
        </div>
        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required></input>
            <label className="form-check-label" htmlFor="invalidCheck">
              Agree to terms and conditions
            </label>
            </div>
        </div>
        <div>
            <div className="invalid-feedback">
              You must agree before submitting.
            </div>
        
        <div className="col-12">
            <button className="btn btn-secondary" type="submit">Submit form</button>
        </div>
        </div>
        </form>
        
        {submitted && <div> the form submitted sucessfully </div> } 
        </div>
      
    
      

        
     
          
          
         
        
        
        




       
    );
}
}
export default Form 