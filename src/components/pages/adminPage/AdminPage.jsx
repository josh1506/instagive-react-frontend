import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Sidebar from '../../common/Sidebar';
import AdminPending from './AdminPending';
import AdminAccepted from './AdminAccepted';
import AdminRejected from './AdminRejected';
import AdminLogin from './AdminLogin';
import '../../../style/adminPage/adminPage.css'

function AdminPage(props) {
    // check if there's a user in coockies
    localStorage.setItem('admin', 'aaksdjklxzczqw312nxcpiqwe123')
    const adminAuthID = localStorage.getItem('admin')


    const adminSideBarItems = [
        {
            label: 'Pending',
            path: '/admin/pending'
        },
        {
            label: 'Accepted',
            path: '/admin/accepted'
        },
        {
            label: 'Rejected',
            path: '/admin/rejected'
        },
    ]

    const renderContent = () => {
        return !adminAuthID ? <AdminLogin /> :
            <div className='admin-page-container'>
                <Sidebar sideBarItems={adminSideBarItems} />
                <div>
                    <Switch>
                        <Route path='/admin/pending' component={AdminPending} />
                        <Route path='/admin/accepted' component={AdminAccepted} />
                        <Route path='/admin/rejected' component={AdminRejected} />
                        <Redirect to='/admin/pending' />
                    </Switch>
                </div>
            </div>
    }

    return (
        <div>
            {renderContent()}
        </div>
    );
}

export default AdminPage;