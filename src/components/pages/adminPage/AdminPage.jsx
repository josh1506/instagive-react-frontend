import React from 'react';
import Sidebar from '../../common/Sidebar';
import AdminPending from './AdminPending';
import AdminAccepted from './AdminAccepted';
import AdminRejected from './AdminRejected';

function AdminPage(props) {
    return (
        <div>
            <Sidebar />

            <AdminPending />
            <AdminAccepted />
            <AdminRejected />
        </div>
    );
}

export default AdminPage;