import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


import {connect} from 'react-redux'

function LedgerList(props) {
  // const userLedger = useContext(UserLedger);




  console.log(props.ledger);
  console.log(props.post)


  console.log('Ledger');

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
        {/* <table>
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

          {props.ledger &&
            props.ledger.map((data) => (
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
            ))}
        </table>
      */}
        <TableContainer component={Paper}>
          <Table
            className={{ table: { minWidth: 650 } }}
            aria-label='simple table'
          >
            <TableHead>
              <TableRow>
                <TableCell align='right'>POST</TableCell>
                <TableCell align='right'>NAME</TableCell>
                <TableCell align='right'>EMAIL</TableCell>
                <TableCell align='right'>DONATION TYPE</TableCell>
                <TableCell align='right'>
                  Payment Method (If Cash Donation)
                </TableCell>
                <TableCell align='right'>AMOUNT / ITEM QUANTITY</TableCell>
                <TableCell align='center'>REMARKS</TableCell>
                <TableCell align='center'>DATE</TableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {props.ledger &&
                props.ledger.map((data) => (
                  <TableRow key={data._id}>
                    <TableCell  align='right'>{ props.post.filter(postData => postData._id === data.postId )[0].Title }</TableCell>
                    <TableCell align='right'>{data.donorName}</TableCell>
                    <TableCell align='right'>{data.email}</TableCell>
                    <TableCell align='right'>{data.donationType}</TableCell>
                    <TableCell align='right'>{data.paymentAddress}</TableCell>
                    <TableCell align='right'>{data.amount}</TableCell>
                    <TableCell style={{maxWidth: '20vw'}} align='center'>{data.remarks}</TableCell>
                    <TableCell align='left'>{(data.date)}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}



const mapStateToProps = (state) => {


return {ledger: state.user.ledger, post: state.user.post}

}



export default connect(mapStateToProps)(LedgerList);
