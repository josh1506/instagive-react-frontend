import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
// import UserLedger from '../../../../context/userContext';

function LedgerList(props) {
    // const userLedger = useContext(UserLedger)
    return (
        <div>
            <div>
                <input type="text" />
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
                    <tr>
                        <td>Jill</td>
                        <td>Smith</td>
                        <td>Jill</td>
                        <td>Smith</td>
                        <td>Jill</td>
                        <td>Smith</td>
                        <td>Jill</td>
                        <td>Smith</td>
                        <td>
                            <button>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Eve</td>
                        <td>Jackson</td>
                        <td>Eve</td>
                        <td>Jackson</td>
                        <td>Eve</td>
                        <td>Jackson</td>
                        <td>Eve</td>
                        <td>Jackson</td>
                        <td>
                            <button>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Adam</td>
                        <td>Johnson</td>
                        <td>Adam</td>
                        <td>Johnson</td>
                        <td>Adam</td>
                        <td>Johnson</td>
                        <td>Adam</td>
                        <td>Johnson</td>
                        <td>
                            <button>Delete</button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default LedgerList;