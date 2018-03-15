import React, { Component } from 'react';
import './adminstyle.css' 
export default class AdminHeader extends Component {
  render() {
    return (
      <div class="row"> 
        <header id="header">
          <div className="container">
            <div className="row">
              <div className="col-md-10">
                <h1><span className="glyphicon glyphicon-cog" aria-hidden="true" /> LBA <small>Manage Admin Site</small></h1>
              </div>
              <div className="col-md-2">
                <div className="dropdown create">
                  <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Account Manage
                  <span className="caret" />
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li><a href="#">Edit Infomation</a></li>
                    <li><a href="#">Change Password</a></li>
                    <li><a href="#">Add User</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    )
  }
};
