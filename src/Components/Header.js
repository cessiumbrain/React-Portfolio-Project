import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <Navbar sticky="top" expand="md" className="justify-content-center">
                <NavbarBrand>
                    Sunburst
                    <img/>
                </NavbarBrand>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink className="nav-link" href="/">
                        Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" href="/contactus">
                            Contact Us
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" href="/profile">
                            Profile
                        </NavLink>
                    </NavItem>
                        <input className="m-1 ml-5" type="text" placeholder="username"></input>
                        <input className="m-1" type="text" placeholder="password"></input>
                        <button className="btn btn-primary m-1">Log In</button>
                        <Link to="/signup">
                        <button className="btn btn-primary m-1" to="/signup">Sign Up</button>
                        </Link>
                </Nav>
            </Navbar>
        )
    }
}

export default Header;