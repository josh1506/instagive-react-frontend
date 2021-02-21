import React, { useContext } from 'react';
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import Table from './../../common/Table';
import AccountList from './../../../contex/accountList';

function AdminPending(props) {
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

    const handleApproveAccount = (event, account) => {
        console.log(account);
    }


    const handleRejectAccount = (event, account) => {
        console.log(account);
    }



    return (
        <div>
            <h1 className='admin-page-title'>Pending</h1>
            <table className='table-container'>
                <thead>
                    <tr>
                        {theadData.map(tableHead =>
                            <th key={tableHead.name} className='table-header'>{tableHead.label}</th>
                        )}
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(account =>
                        <tr key={account.id}>
                            {theadData.map(tableHead =>
                                <td key={tableHead.name} className='table-item'>
                                    {account[tableHead.name]}
                                </td>
                            )}
                            <td className='table-item' id='table-button-container'>
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    className='table-icon'
                                    size='lg'
                                    onClick={e => handleApproveAccount(e, account)}
                                />
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    className='table-icon'
                                    size='lg'
                                    onClick={e => handleRejectAccount(e, account)}
                                />
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default AdminPending;