import React, { Component } from 'react';
import AdminHeaderCTT from '../../constructors/admin/AdminHeaderCTT';
import AdminNarbarCTT from '../../constructors/admin/AdminNarbarCTT';
import AdminListAdminCTT from '../../constructors/admin/AdminListAdminCTT';
import '../../components/admin/adminstyle.css'
export default class ListAdminPage extends Component {
    render() {
        return (
            <div>
                <AdminNarbarCTT />
                <AdminHeaderCTT />
                
                
            </div>
        )
    }
};
