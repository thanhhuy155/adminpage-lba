import React, { Component } from 'react';
import AdminLeftSizebar from '../../components/admin/AdminLeftSizebar'
import AdminAccounts from '../../components/admin/Accounts/AdminAccounts' ;
import { connect } from 'react-redux'
import '../../components/admin/adminstyle.css'
class AdminListAdmin extends Component {
    render() {
        return (
            <div >
                <AdminLeftSizebar />
                <AdminAccounts />
            </div>
        )
    }
};
const mapStyleToProps = (state) => {
    return {
    }
}
export default connect(mapStyleToProps, null)(AdminListAdmin)
