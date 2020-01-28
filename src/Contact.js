import React from "react";
import Nav from "./Nav.js";

export default class Contact extends React.Component {
  render() {
    return (
      <body>
        <Nav />
        <header className="bg-primary py-5 mb-5">
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-lg-12">
                <h1 className="display-4 text-white mt-5 mb-2">
                  <br />
                  Contact
                </h1>
                <p className="lead mb-5 text-white-50">
                  Author: Van Manh Nguyen
                  <br/>
                  Email: mike.manhnguyen103@gmail.com 
                </p>
                <br/>
                <p className="lead mb-5 text-white-50" id="contact-message">
                  This website serves as a hub for everyone who is interested in automatic weed detection (or data science
                  and machine learning in general). There are plenty of valuable datasets out there that I may have missed.
                  If you know of any of those, or have any feedbacks, please do not hesitate to contact me, so that we can 
                  make this website better for every one who needs it. Thank you.
                </p>
              </div>
            </div>
          </div>
        </header>
      </body>
    );
  }
}
