import React from 'react';
import "./style.css";

/**
* @author
* @function AdminLogin
**/

const AdminLogin = (props) => {
  return(
    <div className="d-flex justify-content-around ">
      <div className="adminLogin">
        <div className="text-center">
          <img id="loginLogo" src="images/logo.jpeg" alt="logo"/>
        </div>
        <form>
          <div className="form-group">
            <label for="comment">username</label><br/>
            <input type="text" placeholder="Admin" className="form-cotrol"/>
          </div>

          <div className="form-group">
            <label for="comment">Password</label><br/>
            <input type="text" placeholder="Password" className="form-cotrol"/>
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
      {/*
      <style>{"\
        #adminBar{display: none;}\
        #adminHero{left:10%}\
      "}</style>
      */}
    </div>
   )

 }

export default AdminLogin