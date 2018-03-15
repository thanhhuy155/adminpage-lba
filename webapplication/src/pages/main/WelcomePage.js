import React, { Component, Fragment } from 'react';
import Footer from '../../components/Footer'
import { Link, Switch, BrowserRouter as Router } from 'react-router-dom'
import LoginPage from './LoginPage'
import { Route } from 'react-router-dom'
import RegisterPage from './RegisterPage'

import Welcome from '../../components/main/Welcome'
import './WelcomePage.css'
import NotFoundPage from './NotFoundPage'
import { connect } from 'react-redux'
import ForgetPasswordPage from './ForgetPasswordPage'
export default class WelcomePage extends Component {
    render() {
        return (
            <Router>
                <div class="wrapper">
                    <div class="container" >
                        <div class="header">
                            <div class="navbar">
                                <Link class="navbar-brand" to="/">LBA Logo</Link>
                                <ul class="nav navbar-nav pull-right">
                                    <Link
                                        to="/w/Login"
                                        style={{
                                            fontSize: 20
                                        }} ><span class="glyphicon glyphicon-log-in"></span><strong>Login</strong></Link>
                                    &nbsp;
                                    &nbsp;
                                    &nbsp;
                                    <Link
                                        to="/w/Register"
                                        style={{ fontSize: 20 }}><span class="glyphicon glyphicon-user"></span><strong>Register</strong></Link>

                                </ul>
                            </div>

                        </div>
                    </div>
                    <div class="main">
                        <div class="container page">
                            <Switch>
                                <Route exact name="Welcome" path='/w' component={Welcome} /> 
                                <Route name='Login' path={'/w/Login'} component={LoginPage} />
                                <Route name='ForgetPassword' path={`/w/EditPassword`} component={ForgetPasswordPage} />
                                <Route name='Register' path={`/w/Register`} component={RegisterPage} />
                                <Route name='NotFoundPage' path="/w" component={NotFoundPage} />
                            </Switch>
                        </div>

                    </div>                  
                <Footer> </Footer>                   
                </div>
            </Router>
        )
    }

};



