import React from 'react'
import './button.css'

function Button(){
  function Getstartedhandler() {
    alert('welcome to oap... fill the form below to get started')
  }
    return(
          <div className='containerbutton'>       
<button onClick={Getstartedhandler} type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Get started now!
</button>

<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        Welcome to Oap!...Fill out the forms and agree to terms
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</div>
   )
}

export default Button;