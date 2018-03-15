import React, { Component } from 'react';
import AdminHeaderCTT from '../../constructors/admin/AdminHeaderCTT';
import AdminNarbarCTT from '../../constructors/admin/AdminNarbarCTT';
import AdminLeftSizebarCTT from '../../constructors/admin/AdminLeftSizebarCTT';
import '../../components/admin/adminstyle.css'
export default class AdminstratorHomePage extends Component {
  render() {
    return (
      <div>
        <AdminNarbarCTT />
        <AdminHeaderCTT />
        <section id="main">
          <div className="container"
            style={{ marginLeft: '-20px' }}
          >
            <div className="row">
        <AdminLeftSizebarCTT />
            </div>
          </div>
        </section>
      </div>
    )
  }
};
