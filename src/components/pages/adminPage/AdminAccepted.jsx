import React, { useContext } from 'react';
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import AccountList from './../../../context/accountList';

function AdminAccepted(props) {
    const accountList = useContext(AccountList)
    const data = accountList.approved ? accountList.approved : [];

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

    const handleEditButton = (account) => {
        console.log(account);

        window.location.reload();
    }

    const handleDeleteButton = async (account) => {
        console.log(account);
        await axios
            .post(`http://localhost:5000/admin/changestatus/${account}/rejected`)

        window.location.reload();
    }

    return (
        <div>
            <h1 className='admin-page-title'>Accepted</h1>
            <table className='table-container'>
                <thead>
                    <tr>
                        {theadData.map(tableHead =>
                            <th key={tableHead.name} className='table-header'>{tableHead.label}</th>
                        )}
                        <th className='table-header'>No. of Post</th>
                        <th className='table-header'>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(account =>
                        <tr key={account.id}>
                            {theadData.map(tableHead =>
                                <td key={tableHead.name} className='table-item'>
                                    {account[tableHead.name]}</td>
                            )}
                            <td className='table-item'>

                            </td>
                            <td className='table-item'>
                                <FontAwesomeIcon
                                    icon={faEdit}
                                    className='table-icon'
                                    size='lg'
                                    onClick={e => handleEditButton(account._id)}
                                    style={{ cursor: 'pointer' }}
                                />
                                <FontAwesomeIcon
                                    icon={faTrash}
                                    className='table-icon'
                                    size='lg'
                                    onClick={e => handleDeleteButton(account._id)}
                                    style={{ cursor: 'pointer' }}
                                />
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default AdminAccepted;