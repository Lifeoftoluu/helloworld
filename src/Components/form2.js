import React, { useState } from "react";
    

function Form2(){
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
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
        
       
    
return(  
<div>  

<form className='register-form' onSubmit={handleSubmit}> 
<input
id="first-name"
className="form-field"
type="text"
placeholder="First Name"
name="firstName"
value={values.firstName}
onChange={handleFirstNameInputChange}
required
/>
{submitted && !values.firstName && <span id="first-name-error">Please input first name</span>}
   

<input 
id="last-name"
className="form-field"
type="text"
placeholder="Last Name"
name="lastName"
value={values.lastName}
onChange={handleLastNameInputChange}
required
/>
{!submitted && !values.lastName && <span id="last-name-error">Please input last name</span>}

<input
id="email"
className="form-field"
type="text"
placeholder="Email"
name="email"
value={values.email}
onChange={handleEmailInputChange}
required
/>
{submitted && !values.email && <span id="email-error">Input email</span> }
<button className="btn btn-secondary" type="submit">Submit form</button>
</form>

{submitted && <div> the form submitted sucessfully </div> }
</div>
 
 )
}

export default Form2;