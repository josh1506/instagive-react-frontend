import React, { useContext } from 'react';
import Table from './../../common/Table';
import AccountList from './../../../contex/accountList';

function AdminRejected(props) {
    const accountList = useContext(AccountList)
    const data = accountList.filter(account => account.accountStatus === 'pending')
    const theadData = [
        {
            label: 'Organization',
            name: 'orgName'
        },
        {
            label: 'Email',
            name: 'email'
        },
        {
            label: 'City',
            name: 'city'
        },
        {
            label: 'Rep. Name',
            name: 'repName'
        },
    ]
    return (
        <div>
            <h1 className='admin-page-title'>Rejected</h1>
            <table className='table-container'>
                <thead>
                    <tr>
                        {theadData.map(tableHead =>
                            <th key={tableHead.name} className='table-header'>{tableHead.label}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {data.map(account =>
                        <tr key={account.id}>
                            {theadData.map(tableHead =>
                                <td key={tableHead.name} className='table-item'>{account[tableHead.name]}</td>
                            )}
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default AdminRejected;