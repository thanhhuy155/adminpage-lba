import React, { Component } from 'react';
import AdminLeftSizebar from '../../components/admin/AdminLeftSizebar'
import AdminContain from '../../components/admin/AdminContain'
import { connect } from 'react-redux'
import '../../components/admin/adminstyle.css'
class AdminLeftSizebarCTT extends Component {
    render() {
        return (
                    <div >
                            <AdminLeftSizebar />
                            <AdminContain />
                    </div>
        )
    }
};
const mapStyleToProps = (state) => {
    return {
    }
}
export default connect(mapStyleToProps, null)(AdminLeftSizebarCTT)
