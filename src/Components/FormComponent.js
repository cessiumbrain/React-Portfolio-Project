import React, { Component } from 'react';

class FormComponent extends Component {
  constructor(props) {
      super(props)
  }

  render() {
    return(
      <div className="container bottom-margin">
        <div className="row">
          <div className="col">
            <form className="form text-center text-light rounded m-3">
              
              <h3 className="pt-3">Get a Quote</h3>

              <div className="form-group">
                <label for="#firstName">First Name</label>
                <input className="form-control" type="text" id="firstName" placeholder="John"/>
                <label for="#lastName">Last Name</label>
                <input className="form-control" type="text" id="lastName" placeholder="Doe"/>
              </div>

              <div className="form-group">
                <label for="#business">Business or Organization</label>
                <input className="form-control" type="text" id="business" placeholder="Business Inc. LLC"/>
              </div>

              <div className="form-group">
                <label for="#telephone">Telephone</label>
                <input className="form-control" type="tel" id="telephone" placeholder="555-555-5555"/>
                <label for="#email">Email</label>
                <input className="form-control" type="email" id="email" placeholder="JohnDoe@gmail.com"/>
              </div>

              <div className="form-group">
                <label for="#media">Media Printed</label>
                <input className="form-control" type="text" id="media" placeholder="t-shirts, jackets, hats"/>
                <label for="#quantity">Quantity</label>
                <input className="form-control" type="number" id="quantity"/>
              </div>

              <div className="form-group">
                <label for="#notes">Notes:</label>
                <input className="form-control" type="text" id="notes"/>
              </div>

              <button className="btn btn-light" type="submit">Submit</button>
                  
            </form>
          </div>
      </div>
    </div>
    )
  }
};

export default FormComponent;