import React, { Component } from 'react';

class OrderHistory extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
        <div>
            Order History: {this.props.currentUser.orders[0].date}
        </div>
        )
    }
    
}

export default OrderHistory;