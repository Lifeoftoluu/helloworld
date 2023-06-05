import React from 'react'
import './navbar.css'

function Navbar(){
    
    return(
        
        <div className="container menucontainer">
            <div className="row">
  <ul>
      <ul className="nav nav-pills">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/pricing">Pricing</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='/api'>Api</a>
          </li>
        <li className='nav-item'>
          <a className='nav-link' href="/mode">mode</a>
        </li>
    
      </ul>
    </ul>
    <br/>
    </div>
    </div>
    )
}

export default Navbar; 