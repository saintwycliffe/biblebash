import React, { Component } from 'react';

class Footer extends Component {
  render(){
    return(
        <div className="footer">
            <span className="footer-text">Created by Joe Johnson &copy; {new Date().getFullYear()}</span>
        </div>
      );
  }
}

export default Footer;
