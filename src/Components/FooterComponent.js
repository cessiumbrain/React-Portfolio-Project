import React, { Component } from 'react';


class Footer extends Component {
    constructor(props) {
        super(props);
    }

render() {
    return(
    <div>
        <footer class="footer fixed-bottom text-light">
            <div class="container">
              <div class="row">
                <div class="col-4 text-center">
                  <a href="https://www.facebook.com/SunburstSportswear"><i class="fab fa-facebook-f p-2 fa-2x"></i></a>
                  <a href="https://www.instagram.com/sunbursttz/"><i class="fab fa-instagram fa-2x p-2"></i></a>
                  <a href="mailto:sunbursttz@comcast.net"><i class="far fa-envelope-open p-2 fa-2x"></i></a>
                </div>
                <div class="col-4 text-center">
                  <p>Tel: 555-555-5555<br/>
                  Email: sunbursttz@comcast.net</p>
                </div>
                <div class="col-4 text-center">
                  <p>123 Street Ave.<br/>
                  Pittsburgh, PA 15228</p>
                </div>
              </div>
            </div>
          
          </footer>
    </div>
    )
    }
}

export default Footer