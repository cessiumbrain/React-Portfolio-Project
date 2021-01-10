import React, {Component} from 'react';
import Header from './Header';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import FormComponent from './FormComponent';
import CustomerProfile from './CustomerProfile';
import CUSTOMERS from './Customers';
import SignUp from './SignUp';
import WelcomePage from './WelcomePage';


class MainComponentTwo extends Component {
    constructor(props){
        super(props)
        this.state= {
            customers: [
                {
                    id: 0,
                    loggedIn: false,
                    username: "moe",
                    orders: [
                        {
                            date: "January 4th 2021",
                            products: "tee shirts"
                        }
            
                    ]
                }
            ]
        }
    }


//Method to add a user from the sign up page by updating the state
    /*addUser = () => {
        const password = document.querySelector('.passwordbox').value;
        const userName = document.querySelector('.inputbox').value;
        this.setState({ customers:this.state.customers.concat(
                {
                    id: this.state.customers.length + 1,
                    username: userName,
                    password: password,
                    loggedIn: true,
                    orders: [
                         {
                            date: "",
                            products: ""
                        }
            
                    ]
                }
        ) }
        )
    } */

    render(){

        //find user whose loggedIn value equals true and set that to the variable loggedInUser
        const loggedInUser = this.state.customers.find(customer => customer.loggedIn = true);
        console.log(loggedInUser.loggedIn)
        return(
            <div className="background">
                <Header/>
                <Switch>
                    <Route path='/home' render={ () => {
                        if (loggedInUser.loggedIn = false) {
                            return(
                                <FormComponent></FormComponent>
                            )
                        } else {
                            return(
                                <div></div>
                            )
                        }
                    }
                }
                    >
                    
                    </Route>
                    <Route path='/contactus' component={FormComponent}/>
                    <Route path='/profile' render={()=><CustomerProfile loggedInUser={loggedInUser}/>}/>
                    <Route path='/signup' render={() =><SignUp addUser={this.addUser}></SignUp>} />
                    <Redirect to='/' render={() =><WelcomePage loggedInUser={loggedInUser}></WelcomePage>}/>
                </Switch>
                
                <Footer/>
            </div>
        )
    }
}

export default MainComponentTwo
