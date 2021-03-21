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
import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Fragment } from 'react';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';

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

  const [table, setTable] = useState('Approved');

  const classes = useStyles();

  const handleReject = () => {
    // axios Rejected
  };

  const handleApprove = () => {
    // axios Approved
  };

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
            Select Org
          </InputLabel>

          <Select
            required={true}
            variant='outlined'
            label='city'
            name='city'
            id='city'
            //value={ledgerForm.postId}
            onChange={(e) => setUserId()}
          >
            <MenuItem></MenuItem>
            ))
          </Select>
        </FormControl>

        <Typography variant='h2'> {table}</Typography>

        <ButtonGroup
          variant='outlined'
          aria-label='outlined secondary button group'
        >
          <Button color='secondary' onClick={() => setTable('Approved')}>
            Approved
          </Button>
          <Button color='default' onClick={() => setTable('Pending')}>
            Pending
          </Button>
          <Button color='default' onClick={() => setTable('Rejected')}>
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
                  <StyledTableRow>
                    <StyledTableCell align='center'></StyledTableCell>
                    <StyledTableCell align='center'></StyledTableCell>
                    <StyledTableCell align='center'></StyledTableCell>
                    <StyledTableCell align='center'></StyledTableCell>
                    <StyledTableCell align='center'></StyledTableCell>
                    <StyledTableCell align='center'></StyledTableCell>
                    <StyledTableCell
                      style={{ maxWidth: '20vw' }}
                      align='center'
                    ></StyledTableCell>
                    <StyledTableCell align='center'></StyledTableCell>
                    <StyledTableCell align='center'>
                      {table === 'Approved' && (
                        <Button
                          variant='contained'
                          color='secondary'
                          onClick={handleReject}
                        >
                          <ClearIcon />
                        </Button>
                      )}
                      {table === 'Pending' && (
                        <ButtonGroup>
                          <Button
                            variant='contained'
                            color='primary'
                            onClick={handleApprove}
                          >
                            <CheckIcon />
                          </Button>{' '}
                          <Button
                            variant='contained'
                            color='secondary'
                            onClick={handleReject}
                          >
                            <ClearIcon />
                          </Button>{' '}
                        </ButtonGroup>
                      )}
                      {table === 'Rejected' && (
                        <Button
                          variant='contained'
                          color='primary'
                          onClick={handleApprove}
                        >
                          <CheckIcon />
                        </Button>
                      )}
                    </StyledTableCell>
                  </StyledTableRow>
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
