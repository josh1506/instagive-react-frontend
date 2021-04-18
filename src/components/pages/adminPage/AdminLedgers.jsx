import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  ButtonGroup,
  Typography,
} from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Fragment } from 'react';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import route from '../../../route/instagive'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const AdminLedgers = () => {
  const [userId, setUserId] = useState(0);

  const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 700,
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    formControl: {
      minWidth: 120,
    },
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

  const [table, setTable] = useState('Pending');
  const [orgSelected, setOrgSelected] = useState('')
  const [orgList, setOrgList] = useState([]);
  const [orgLedgerList, setOrgLedgerList] = useState([])
  const [postList, setPostList] = useState([])

  const classes = useStyles();
  const handleReject = async (orgID) => {
    await route.post(`/admin/changeledgerstatus/${orgID}/Rejected`)
    document.location.reload();
  };

  const handleApprove = async (orgID) => {
    await route.post(`/admin/changeledgerstatus/${orgID}/Approved`)
    document.location.reload();
  };

  const handleGetUserLedger = (orgID) => {
    const getData = async () => {
      const { data } = await route.post(`/admin/userledger/${orgID}`)
      setOrgLedgerList(data)
    }
    getData()
  }

  useEffect(() => {
    const getData = async () => {
      const { data: user } = await route.get('/admin/getusers')
      const { data: post } = await route.get('/admin/allpost')
      setOrgList(user.approved)
      setPostList(post)
    }

    getData()
  }, [])
  console.log(orgLedgerList)
  return (
    <div>
      <h1 className='admin-page-title'>Ledgers</h1>

      <Container
        style={{ display: 'flex', justifyContent: 'space-between' }}
        component='main'
        maxWidth='xl'
      >
        <FormControl
          style={{ marginBottom: '12px', marginLeft: '12px' }}
          className={classes.formControl}
        >
          <InputLabel style={{ marginLeft: '12px' }} id='post'>
            {orgSelected === '' ? 'Select Org' : orgSelected}
          </InputLabel>

          <Select
            required={true}
            variant='outlined'
            label='city'
            name='city'
            id='city'
            // value={ledgerForm.postId}
          >
          {orgList.map(org =>
              <MenuItem 
                key={org._id}
                onClick={() => {
                setOrgSelected(org.orgName)
                handleGetUserLedger(org._id)
              }}
              >
                {org.orgName}
                </MenuItem>
            )}
          </Select>
        </FormControl>

        <Typography variant='h2'> {table}</Typography>

        <ButtonGroup
          variant='outlined'
          aria-label='outlined secondary button group'
        >
          <Button color={table === 'Approved' ? 'secondary' : 'default'} onClick={() => setTable('Approved')}>
            Approved
          </Button>
          <Button color={table === 'Pending' ? 'secondary' : 'default'} onClick={() => setTable('Pending')}>
            Pending
          </Button>
          <Button color={table === 'Rejected' ? 'secondary' : 'default'} onClick={() => setTable('Rejected')}>
            Rejected
          </Button>
        </ButtonGroup>
      </Container>

      <Container component='main' maxWidth='xl' className='shadow-container'>
        <div style={{ overflowX: 'auto' }}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label='customized table'>
              <Fragment>
                <TableHead>
                  <TableRow>
                    <StyledTableCell align='center'>POST</StyledTableCell>
                    <StyledTableCell align='center'>NAME</StyledTableCell>
                    <StyledTableCell align='center'>EMAIL</StyledTableCell>
                    <StyledTableCell align='center'>
                      DONATION TYPE
                    </StyledTableCell>
                    <StyledTableCell align='center'>
                      Payment Method (If Cash Donation)
                    </StyledTableCell>
                    <StyledTableCell align='center'>
                      AMOUNT / ITEM QUANTITY
                    </StyledTableCell>
                    <StyledTableCell align='center'>REMARKS</StyledTableCell>
                    <StyledTableCell align='center'>DATE</StyledTableCell>
                    <StyledTableCell align='center'>STATUS</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orgLedgerList.filter(post => post.status === table).map(post =>
                    <StyledTableRow key={post._id}>
                      <StyledTableCell align='center'>{postList.find(postItem => postItem._id === post.postId).Title}</StyledTableCell>
                      <StyledTableCell align='center'>{post.donorName}</StyledTableCell>
                      <StyledTableCell align='center'>{post.email}</StyledTableCell>
                      <StyledTableCell align='center'>{post.donationType}</StyledTableCell>
                      <StyledTableCell align='center'>{post.paymentAddress}</StyledTableCell>
                      <StyledTableCell align='center'>{post.amount}</StyledTableCell>
                      <StyledTableCell
                        style={{ maxWidth: '20vw' }}
                        align='center'
                      >{post.remarks}</StyledTableCell>
                      <StyledTableCell align='center'>{post.date}</StyledTableCell>
                      <StyledTableCell align='center'>
                        {table === 'Approved' && (
                          <Button
                            variant='contained'
                            color='secondary'
                            onClick={() => handleReject(post._id)}
                          >
                            <ClearIcon />
                          </Button>
                        )}
                        {table === 'Pending' && (
                          <ButtonGroup>
                            <Button
                              variant='contained'
                              color='primary'
                              onClick={() => handleApprove(post._id)}
                            >
                              <CheckIcon />
                            </Button>{' '}
                            <Button
                              variant='contained'
                              color='secondary'
                              onClick={() => handleReject(post._id)}
                            >
                              <ClearIcon />
                            </Button>{' '}
                          </ButtonGroup>
                        )}
                        {table === 'Rejected' && (
                          <Button
                            variant='contained'
                            color='primary'
                            onClick={() => handleApprove(post._id)}
                          >
                            <CheckIcon />
                          </Button>
                        )}
                      </StyledTableCell>
                    </StyledTableRow>
                  )}
                </TableBody>
              </Fragment>
            </Table>
          </TableContainer>
        </div>
      </Container>
    </div>
  );
};

export default AdminLedgers;
