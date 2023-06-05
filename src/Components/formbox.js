import React, {useState} from 'react'
import './formbox.css'
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

function Formbox(){

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

      const handleUsernameInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            username: event.target.value,
        }));
      };
            
      const handleEmailInputChange = (event) => {
          event.persist();
          setValues((values) => ({
            ...values,
            email: event.target.value,
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
      };
      
      const handleZipInputChange = (event) => {
          event.persist();
          setValues((values) => ({
            ...values,
            zip: event.target.value,
          }));
      };

      const [submitted, setSubmitted,] = useState(false);
      const handleSubmit = (event)   => {   
        event.preventDefault();
        event.persist();
        if(values.firstName && values.lastName && values.email && values.city && values.state && values.zip) {
        }     
        setSubmitted(true);
                
        
        
    };

    return(
<form className="row g-3 needs-validation" onSubmit={handleSubmit} novalidate>
  <div className="col-md-4">
    <label for="validationCustom01" className="form-label">First name </label>
    <input type="text" className="form-control" id="validationCustom01" value={values.firstName} onChange={handleFirstNameInputChange} required></input>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-4">
    <label for="validationCustom02" className="form-label">Last name </label>
    <input type="text" className="form-control" id="validationCustom02" value={values.lastName} onChange={handleLastNameInputChange} required></input>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-4">
  <label htmlFor="validationCustomUsername" className="form-label">Username</label>
          <div className="input-group has-validation">
            <span className="input-group-text" id="inputGroupPrepend">@</span>
            <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" value={values.username} onChange={handleUsernameInputChange} required></input>            
    </div>
  </div>
  <div className="col-md-4">
          <label htmlFor="validationCustomEmail" className="form-label">Email</label>
          <div className="input-group has-validation">
            <span className="input-group-text" id="inputGroupPrepend">@...com</span>
            <input type="email" className="form-control" id="validationCustomEmail" aria-describedby="inputGroupPrepend" value={values.email} onChange={handleEmailInputChange} required></input>
            </div>
            </div>
  <div className="col-md-6">
    <label for="validationCustom03" className="form-label">City </label>
    <input type="text" className="form-control" id="validationCustom03" value={values.city} onChange={handleCityInputChange} required></input>
    <div className="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div className="col-md-3">
    <label for="validationCustom04" className="form-label">State </label>
    <select className="form-select" id="validationCustom04" value={values.state} onChange={handleStateInputChange} required>
      <option selected disabled value="">Choose...</option>
      <option>Kwara</option>
      <option>Lagos</option>
      <option>Fct</option>
    </select>
    <div className="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  <div className="col-md-3">
    <label for="validationCustom05" className="form-label">Zip </label>
    <input type="text" className="form-control" id="validationCustom05" value={values.zip} onChange={handleZipInputChange} required></input>
    <div className="invalid-feedback">
      Please provide a valid zip.
    </div>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required></input>
      <label className="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div className="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div className="col-12">
    <button className="btn btn-primary" type="submit">Submit form</button>
  </div>
  {submitted && <div> the form submitted sucessfully </div> } 
</form>
    )
}


export default Formbox;