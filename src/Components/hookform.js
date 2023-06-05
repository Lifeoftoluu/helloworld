import React from "react";
import './hookform.css';
import { useFormik } from "formik";

const initialValues = {
    name: "",
    email: "",
    zip: "",
}

   
const onSubmit = values => {
    console.log('form data', values)
    }

const validate = values => {

    let errors = {}

    if(!values.name) {
        errors.name = 'Required'
    }

    if(!values.email) {
        errors.email = 'Required'                
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email format'
    }

    if(!values.zip) {
        errors.zip = 'Required'
    }

    return errors
}


function Hookform() {
  const formik = useFormik({
    initialValues,
    onSubmit ,
    validate
    
  })   

  //console.log('Form values', formik.values)
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />        
          {formik.errors.name ? <div className="alert">{formik.errors.name}</div> : null}
          </div>

        <div className="form-control">
        <label className="email" htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
          {formik.errors.email ? <div className="alert">{formik.errors.email}</div> : null}
        </div>
       
        <div className="form-control">
        <label htmlFor="zip">Zip</label>
        <input
          type="text"
          id="zip"
          name="zip"
          onChange={formik.handleChange}
          value={formik.values.zip}
        />        
          {formik.errors.zip ? <div className="alert">{formik.errors.zip}</div> : null}
        </div>
        <button>Submit</button>
        {onSubmit 
          && <div> the form submitted sucessfully </div> }
      </form>
    </div>
  );
}
export default Hookform;
