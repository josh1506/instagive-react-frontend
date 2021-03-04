import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

function LedgerList(props) {
  // const userLedger = useContext(UserLedger);

  console.log('Ledger')

  return (
    <div>
      <div>
        <input type='text' />
      </div>
      <div>
        <FontAwesomeIcon
          icon={faPlusCircle}
          className='deleteButton'
          size='lg'
          onClick={() => props.history.push('/user/ledger/create')}
        />
      </div>
      <div style={{ overflowX: 'auto' }}>
        <table>
          <tr>
            <th>Post</th>
            <th>Name</th>
            <th>Email(optional)</th>
            <th>Donation Type</th>
            <th>Payment Method(if money donation)</th>
            <th>Amoung/Item</th>
            <th>Remarks</th>
            <th>Date</th>
            <th></th>
          </tr>

          {/* {userLedger.ledger &&
            userLedger.ledger.map((data) => (
              <tr>
                <td>{data.postId}</td>
                <td>{data.donorName}</td>
                <td>{data.email}</td>
                <td>{data.donationType}</td>
                <td>{data.paymentAddress}</td>
                <td>{data.amount}</td>
                <td>{data.remarks}</td>
                <td>{data.date}</td>

                <td>
                  <button>Delete</button>
                </td>
              </tr>
            ))} */}
        </table>
      </div>
    </div>
  );
}

export default LedgerList;
