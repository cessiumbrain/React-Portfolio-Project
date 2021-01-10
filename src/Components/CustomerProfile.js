import React, { Component } from 'react';

class CustomerProfile extends Component{
    constructor(props){
        super(props)
    }

    render(){
        if(this.props.loggedInUser){
            return(
                <div>
                    Welcome {this.props.loggedInUser.username}
                    <p>Your Last Order Was: </p>
                    
                </div>

            )
        } else {
            return(
                <div>
                    No Logged In User
                </div>
            )
        }
    }
}

export default CustomerProfile;