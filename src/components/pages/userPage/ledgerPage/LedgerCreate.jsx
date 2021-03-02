import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import UserContext from './../../../../context/userContext';




function LedgerCreate(props) {
  
  const postData = useContext(UserContext)
  
    console.log(postData)


    console.log(postData.post ? postData.post : '')

    const [dateValue, setDateValue] = useState(new Date())
    const [ledgerForm, setLedgerForm] = useState({
        postId: '',
        donorName: '',
        donationType: '',
        paymentAddress: '',
        amount: 0,
        remarks: '',
        date: ''
    }) 

    const handleSubmit = async event => {
        event.preventDefault()
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="postId">Select Post</label>
                    <select id='postId'
                        value={ledgerForm.postId}
                        onChange={e => setLedgerForm({ ...ledgerForm, postId: e.target.value })}
                    >

                

                        <option value=''>Post 1</option>
                        <option value=''>Post 2</option>
                        <option value=''>Post 3</option>
                 
                 
                 
                 
                    </select>
                </div>
                <div>
                    <label htmlFor="donorName">Name</label>
                    <input type="text" name="donorName" id="donorName"
                        value={ledgerForm.donorName}
                        onChange={e => setLedgerForm({ ...ledgerForm, donorName: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="">Email(optional)</label>
                    <input type="text" name="" id="" />
                </div>
                <div>
                    <label htmlFor="donationType">Donation Type</label>
                    <select id='donationType'>
                        <option>Cash</option>
                        <option>In-kind</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="paymentAddress">Payment Method(if money donation)</label>
                    <input type="text" name="paymentAddress" id="paymentAddress"
                        value={ledgerForm.paymentAddress}
                        onChange={e => setLedgerForm({ ...ledgerForm, paymentAddress: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="amount">Amoung/Item</label>
                    <input type="text" name="amount" id="amount"
                        value={ledgerForm.amount}
                        onChange={e => setLedgerForm({ ...ledgerForm, amount: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="remarks">Remarks</label>
                    <input type="text" name="remarks" id="remarks"
                        value={ledgerForm.remarks}
                        onChange={e => setLedgerForm({ ...ledgerForm, remarks: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="">Date</label>
                    <DatePicker selected={dateValue} onChange={date => {
                        setDateValue(date)
                        setLedgerForm({ ...ledgerForm, date: date.toString().split(' ').slice(1, 4).toString().replaceAll(',', ' ') })
                    }} />
                </div>
                <div>
                    <Link to='/user/ledger'>Cancel</Link>
                    <button>Save</button>
                </div>
            </form>
        </div>
    );
}

export default LedgerCreate;