import React from 'react';
import './contact.css';
import 'bootstrap-social';
import {Container} from 'react-bootstrap';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faInstagramSquare, faTwitter } from '@fortawesome/free-brands-svg-icons'
import Hookform from './hookform';

function Contact () {
    return (
        <Container>
            <h1>How can we help you?</h1>
        <div class="container">
  <div class="row">
    <div class="col1">
      Getting in touch with us is so easy!
    </div>
    <div class="col2">
      we are just a click away
    </div>
  </div>
            <Hookform/>
  <div class="row">
    <div class="col">
                    <div className="col instagramicon">
                        <p>Chat to us on<br/>Instagram</p>
                        <a href="https://instagram.com/opawoyeadeoluphotography" target="_blank">
                            <FontAwesomeIcon icon={faInstagram} beat/>
                         </a>                         
                    </div>
    </div>
    <div class="col">
                <div className='col facebookicon'>
                    <p>Connect with us on<br/>facebook</p>
                    <a href="https://facebook.com" target="_blank">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                </div>
    </div>
    <div class="col">
    <div className="col twittericon">    
                    <p>Reach out on<br/>twitter<br/></p>           
                    <a href="https://twitter.com/theonlyopa" target="_blank">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                </div>
    </div>
  </div>
</div>
        
        </Container>  
    );
}

export default Contact;