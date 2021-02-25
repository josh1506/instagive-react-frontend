import React, { useContext, useEffect } from 'react';
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import AccountList from './../../../context/accountList';

function AdminPending(props) {
    let accountList = useContext(AccountList)
    let data = accountList.pending ? accountList.pending : [];



  



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

    const  handleApproveAccount = async (account) => {
        await axios
        .post(`http://localhost:5000/admin/changestatus/${account}/approved`).then(() => accountList = [])

        window.location.reload();
        
    };

   
   
   
   
    


    const handleRejectAccount =async  (account) => {
      
        await axios
        .post(`http://localhost:5000/admin/changestatus/${account}/rejected`).then(() => accountList = [])

        window.location.reload();
        
   
   
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
                                    onClick={() =>handleApproveAccount(account._id)}
                                />
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    className='table-icon'
                                    size='lg'
                                    onClick={() => handleRejectAccount(account._id)}
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