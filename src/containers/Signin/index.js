import React from 'react'
import Logo from '../../components/Logo'
import './style.css'

/**
* @author Andrew-Lloyd Small
* @function Signin
**/


const Signin = (props) => {
  return(

    

    <div id="signinContainer" className="container d-flex flex-column">

      <style>{"\
        #header{\
          display: none;\
        }\
        #footerContainer{\
          display: none;\
        }\
      "}</style>
      
        <div className="d-flex justify-content-center">
          <Logo/>
        </div>

        <div id="signinCard" className="d-flex justify-content-center">
          <div class="fb-login-button" data-width="" data-size="large" data-button-type="login_with" data-layout="default" data-auto-logout-link="true" data-use-continue-as="true"></div>
        </div>

    </div>
   )

 }

export default Signin