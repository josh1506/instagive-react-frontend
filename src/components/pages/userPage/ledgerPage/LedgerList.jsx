import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container'
import {TextField, Button, Icon} from '@material-ui/core/'
import {connect} from 'react-redux'

function LedgerList(props) {




  return (
    <div>
   
   <Button
        style={{margin: '12px'}}
        onClick={() => props.history.push('/user/post-create')}
        variant='contained'
        color='primary'
        endIcon={<Icon fontSize="small">add_circle</Icon>
    }
      >Create Post</Button>

    


      <Container component='main' maxWidth='xl'>

      <div>
      
        <TextField variant='outlined' style={{width: '50%', display: 'relative', left:'25%'}}label="Search Here"/>


      </div>

      <div style={{ overflowX: 'auto' }}>
        
        
        <TableContainer component={Paper}>
          <Table
            aria-label='simple table'
          >
            <TableHead>
              <TableRow>
                <TableCell align='center'>POST</TableCell>
                <TableCell align='center'>NAME</TableCell>
                <TableCell align='center'>EMAIL</TableCell>
                <TableCell align='center'>DONATION TYPE</TableCell>
                <TableCell align='center'>
                  Payment Method (If Cash Donation)
                </TableCell>
                <TableCell align='center'>AMOUNT / ITEM QUANTITY</TableCell>
                <TableCell align='center'>REMARKS</TableCell>
                <TableCell align='center'>DATE</TableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {props.ledger &&
                props.ledger.map((data) => (
                  <TableRow key={data._id}>
                    <TableCell  align='center'>{ props.post.filter(postData => postData._id === data.postId )[0].Title }</TableCell>
                    <TableCell align='center'>{data.donorName}</TableCell>
                    <TableCell align='center'>{data.email}</TableCell>
                    <TableCell align='center'>{data.donationType}</TableCell>
                    <TableCell align='center'>{data.paymentAddress}</TableCell>
                    <TableCell align='center'>{data.amount}</TableCell>
                    <TableCell style={{maxWidth: '20vw'}} align='center'>{data.remarks}</TableCell>
                    <TableCell align='center'>{(data.date)}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      </Container>
    </div>
  );
}



const mapStateToProps = (state) => {


return {ledger: state.user.ledger, post: state.user.post}

}



export default connect(mapStateToProps)(LedgerList);
