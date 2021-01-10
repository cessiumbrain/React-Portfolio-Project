import React, { Component } from 'react';
import ReactDOM from 'react-dom'

class Navbar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <nav>
                    <a className="navbar-brand">Sunburst Sports</a>
            
                    <div className="collapse navbar-collapse d-flex flex-row-reverse">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                            <a className="nav-link">Home</a>
                            </li>
                            <li className="nav-item">
                            <a href="getaquote.html" className="nav-link">Get a Quote</a>
                            </li>
                            <li className="nav-item">
                            <a href="getideas.html" className="nav-link">Get Ideas</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link">Get Information</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link">Call Us</a>
                            </li>
                
                        </ul>
                    </div>
                </nav>
          </div>
        )
    }
}

export default Navbar;