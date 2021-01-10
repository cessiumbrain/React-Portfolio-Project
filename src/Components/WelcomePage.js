import React, { Component } from 'react';

class WelcomePage extends Component {
    constructor(props) {
        super(props)
    };

    render() {
        if(this.props.loggedInUser) {
            return(
            <>
            <h1>Welcome to Sunburst Sportswear {this.props.loggedInUser.username}</h1>
            </>
            )
        } else {
            return(
                <>
                Welcome to Sunburst Sportswear 
                </>
            )
        }
    }
}

export default WelcomePage