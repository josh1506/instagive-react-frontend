import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import {
  TextField,
  Button,
  Icon,
  FormControl,
  InputLabel,
  Select,
  Radio,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  MenuItem,
  Snackbar,
} from '@material-ui/core/';
import { connect } from 'react-redux';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MuiAlert from '@material-ui/lab/Alert';
import { userLedgerAdded, userLedgerAccepted, userLedgerRejected } from '../../../../app/user';
import { CodeOutlined, LaptopWindows } from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import route from '../../../../route/instagive'

function LedgerList(props) {
  console.log('ledger here', props.ledger)
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

  const classes = useStyles();

  // Modal

  const [ledgerForm, setLedgerForm] = useState({
    postId: '',
    donorName: '',
    donationType: 'Cash',
    paymentAddress: '',
    amount: 0,
    remarks: '',
    date: '',
    email: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    // if (ledgerForm.postId === 'Select Post' || ledgerForm.postId === '') return alert('Select Post first')
    // if (ledgerForm.date === '') return alert('Select Date first')

    if (ledgerForm.donorName === '')
      setLedgerForm({ ...ledgerForm, donorName: 'Anonymous' });

    props.userLedgerAdded(ledgerForm, props.userToken);

    setLedgerForm({
      postId: '',
      donorName: '',
      donationType: 'Cash',
      paymentAddress: '',
      amount: 0,
      remarks: '',
      date: '',
      email: '',
    });

    handleClose();
    setOpen(true);

  };

  const [openModal, setModal] = useState(false);

  const handleClickOpen = async () => {
    setModal(true);
  };

  const handleClose = () => {
    setModal(false);
  };



  const [openModalPending, setModalPending] = useState(false);

  const handleClickOpenPending = async () => {
    setModalPending(true);
  };

  const handleClosePending = () => {
    setModalPending(false);
  };



  const [openModalRejected, setModalRejected] = useState(false);

  const handleClickOpenRejected = async () => {
    setModalRejected(true);
  };

  const handleCloseRejected = () => {
    setModalRejected(false);
  };






  const handleApproveLedger = async (ledgerID) => {
    await route.post(`/ledger/${ledgerID}/Approved`, {token: props.userToken})
        document.location.reload();

  }


  const handleRejectLedger = async (ledgerID) => {
    await route.post(`/ledger/${ledgerID}/Rejected`, {token: props.userToken})
    document.location.reload();
  }




  const [open, setOpen] = React.useState(false);

  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant='filled' {...props} />;
  }

  return (
    <div>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleCloseAlert}>
        <Alert onClose={handleCloseAlert} severity='success'>
          Data Successfully Added
        </Alert>
      </Snackbar>

      <Button
        style={{ margin: '12px' }}
        onClick={handleClickOpen}
        variant='outlined'
        color='primary'
        endIcon={<AddIcon fontSize='small'></AddIcon>}
      >
        Add Data
      </Button>

      <Button
        style={{ margin: '10px' }}
        onClick={handleClickOpenPending}
        variant='outlined'
        color='primary'
        endIcon={<HourglassEmptyIcon fontSize='small'></HourglassEmptyIcon>}
      >
        Pending Donates
      </Button>
      <Button
        style={{ margin: '10px' }}
        onClick={handleClickOpenRejected}
        variant='outlined'
        color='secondary'
        endIcon={<DeleteOutlineIcon fontSize='small'></DeleteOutlineIcon>}
      >
        Rejected Donates
      </Button>

      <Container component='main' maxWidth='xl' className='shadow-container'>
        <div>
          <TextField
            variant='outlined'
            style={{
              width: '50%',
              display: 'relative',
              left: '25%',
              marginBottom: '30px',
            }}
            label='Search Here'
          />
        </div>

        <div style={{ overflowX: 'auto' }}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label='customized table'>
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
                </TableRow>
              </TableHead>
              <TableBody>
                {props.ledger.ledgerAccepted &&
                  props.ledger.ledgerAccepted.map((data) => (
                    <StyledTableRow key={data._id}>
                      <StyledTableCell align='center'>
                        {
                          props.post.filter(
                            (postData) => postData._id === data.postId
                          )[0].Title
                        }
                      </StyledTableCell>
                      <StyledTableCell align='center'>
                        {data.donorName}
                      </StyledTableCell>
                      <StyledTableCell align='center'>
                        {data.email}
                      </StyledTableCell>
                      <StyledTableCell align='center'>
                        {data.donationType}
                      </StyledTableCell>
                      <StyledTableCell align='center'>
                        {data.paymentAddress}
                      </StyledTableCell>
                      <StyledTableCell align='center'>
                        {data.amount}
                      </StyledTableCell>
                      <StyledTableCell
                        style={{ maxWidth: '20vw' }}
                        align='center'
                      >
                        {data.remarks}
                      </StyledTableCell>
                      <StyledTableCell align='center'>
                        {data.date}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Container>

      {/* Modal */}

      <Dialog
        open={openModal}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
        maxWidth='sm'
        fullWidth={true}
      >
        <DialogTitle
          id='form-dialog-title'
          style={{ alignSelf: 'center', fontSize: '50px' }}
        >
          Add New Data
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <DialogContentText>
              Please Fill the Inputs Bellow:
            </DialogContentText>

            <FormControl
              style={{ marginBottom: '12px' }}
              fullWidth={true}
              className={classes.formControl}
            >
              <InputLabel style={{ marginLeft: '12px' }} id='post'>
                Select Post
              </InputLabel>

              <Select
                required={true}
                variant='outlined'
                label='city'
                name='city'
                id='city'
                fullWidth={true}
                value={ledgerForm.postId}
                onChange={(e) =>
                  setLedgerForm({ ...ledgerForm, postId: e.target.value })
                }
              >
                {props.post &&
                  props.post.map((post) => (
                    <MenuItem key={post._id} value={post._id}>
                      {post.Title}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>

            <FormControl
              style={{ marginBottom: '12px' }}
              fullWidth={true}
              component='fieldset'
            >
              <FormLabel component='legend'>Select Donation Type</FormLabel>

              <RadioGroup
                aria-label='gender'
                name='gender1'
                value={ledgerForm.donationType}
                onChange={(e) =>
                  setLedgerForm({ ...ledgerForm, donationType: e.target.value })
                }
              >
                <FormControlLabel
                  value='Cash'
                  control={<Radio />}
                  label='Cash'
                />

                <FormControlLabel
                  value='In-Kind'
                  control={<Radio />}
                  label='In-Kind'
                />
              </RadioGroup>
            </FormControl>

            <TextField
              style={{ marginBottom: '12px' }}
              variant='outlined'
              fullWidth={true}
              label='Enter Donor Name (Optional)'
              type='text'
              name='donorName'
              id='donorName'
              value={ledgerForm.donorName}
              onChange={(e) => {
                setLedgerForm({ ...ledgerForm, donorName: e.target.value });
              }}
            />

            <TextField
              style={{ marginBottom: '12px' }}
              variant='outlined'
              fullWidth={true}
              label='Enter Email (Optional)'
              type='text'
              name=''
              id=''
              onChange={(e) =>
                setLedgerForm({ ...ledgerForm, email: e.target.value })
              }
            />

            {ledgerForm.donationType === 'Cash' ? (
              <TextField
                style={{ marginBottom: '12px' }}
                required={true}
                variant='outlined'
                fullWidth={true}
                label='Enter Payment Method(CASH) '
                type='text'
                name='paymentAddress'
                id='paymentAddress'
                value={ledgerForm.paymentAddress}
                onChange={(e) =>
                  setLedgerForm({
                    ...ledgerForm,
                    paymentAddress: e.target.value,
                  })
                }
              />
            ) : (
              ''
            )}

            <TextField
              style={{ marginBottom: '12px' }}
              pattern='[0-9]+'
              required={true}
              variant='outlined'
              fullWidth={true}
              label='Enter Amount(Cash) / Item Quantity(In-Kind)'
              type='number'
              name='amount'
              id='amount'
              value={ledgerForm.amount}
              onChange={(e) =>
                setLedgerForm({ ...ledgerForm, amount: e.target.value })
              }
            />

            <TextField
              style={{ marginBottom: '12px' }}
              variant='outlined'
              fullWidth={true}
              rows={4}
              multiline
              label='Enter Remarks'
              type='text'
              name='remarks'
              id='remarks'
              value={ledgerForm.remarks}
              onChange={(e) =>
                setLedgerForm({ ...ledgerForm, remarks: e.target.value })
              }
            />

            <TextField
              required={true}
              style={{ marginBottom: '12px' }}
              variant='outlined'
              fullWidth={true}
              InputLabelProps={{
                shrink: true,
              }}
              type='date'
              onChange={(date) => {
                setLedgerForm({ ...ledgerForm, date: date.target.value });
              }}
            />

            <DialogActions>
              <Button onClick={handleClose} color='primary'>
                Cancel
              </Button>

              <Button
                type='submit'
                disabled={ledgerForm.amount === 0}
                color='primary'
              >
                Donate
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>


{/* Pending */}
<Dialog
        open={openModalPending}
        onClose={handleClosePending}
        aria-labelledby='form-dialog-title'
        maxWidth='large'
        fullWidth={true}
      >
        <DialogTitle
          id='form-dialog-title'
          style={{ alignSelf: 'center', fontSize: '50px' }}
        >
          Pending Donates
        </DialogTitle>
        <DialogContent>
            <DialogContentText>
             Approved / Reject Donates
            </DialogContentText>






            <TableContainer component={Paper}>
            <Table className={classes.table} aria-label='customized table'>
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
                  <StyledTableCell align='center'>UPDATE</StyledTableCell>

                </TableRow>
              </TableHead>
              <TableBody>
              
              {/* Loop ALl Pending */}
                {props.ledger.ledgerList &&
                  props.ledger.ledgerList.map((data) => (
                    <StyledTableRow key={data._id}>
                      <StyledTableCell align='center'>
                        {
                          props.post.filter(
                            (postData) => postData._id === data.postId
                          )[0].Title
                        }
                      </StyledTableCell>
                      <StyledTableCell align='center'>
                        {data.donorName}
                      </StyledTableCell>
                      <StyledTableCell align='center'>
                        {data.email}
                      </StyledTableCell>
                      <StyledTableCell align='center'>
                        {data.donationType}
                      </StyledTableCell>
                      <StyledTableCell align='center'>
                        {data.paymentAddress}
                      </StyledTableCell>
                      <StyledTableCell align='center'>
                        {data.amount}
                      </StyledTableCell>
                      <StyledTableCell
                        style={{ maxWidth: '20vw' }}
                        align='center'
                      >
                        {data.remarks}
                      </StyledTableCell>
                      <StyledTableCell align='center'>
                        {data.date}
                      </StyledTableCell>
                      <StyledTableCell align='center'>
                      <Button variant="contained"
                       endIcon={<CheckIcon></CheckIcon>} 
                       fullWidth={true} 
                       color="primary"
                       onClick={() => handleApproveLedger(data._id)}
                       ></Button>
                      <Button variant="contained"
                       endIcon={<ClearIcon></ClearIcon>} 
                       fullWidth={true} 
                       color="secondary"
                       onClick={() => handleRejectLedger(data._id)}
                       ></Button>

                      
                      </StyledTableCell>
                 
                 
                 
                 
                    </StyledTableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>














              
            <DialogActions>
              <Button onClick={handleClosePending} color='primary'>
                Cancel
              </Button>


        
            </DialogActions>
        </DialogContent>
      </Dialog>








{/* Rejected Donates */}

<Dialog
        open={openModalRejected}
        onClose={handleCloseRejected}
        aria-labelledby='form-dialog-title'
        maxWidth='large'
        fullWidth={true}
      >
        <DialogTitle
          id='form-dialog-title'
          style={{ alignSelf: 'center', fontSize: '50px' }}
        >
          Rejected Donates
        </DialogTitle>

        <DialogContent>
            




        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label='customized table'>
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

                </TableRow>
              </TableHead>
              <TableBody>
              
              {/* Loop ALl Pending */}
                {props.ledger.ledgerRejected &&
                  props.ledger.ledgerRejected.map((data) => (
                    <StyledTableRow key={data._id}>
                      <StyledTableCell align='center'>
                        {
                          props.post.filter(
                            (postData) => postData._id === data.postId
                          )[0].Title
                        }
                      </StyledTableCell>
                      <StyledTableCell align='center'>
                        {data.donorName}
                      </StyledTableCell>
                      <StyledTableCell align='center'>
                        {data.email}
                      </StyledTableCell>
                      <StyledTableCell align='center'>
                        {data.donationType}
                      </StyledTableCell>
                      <StyledTableCell align='center'>
                        {data.paymentAddress}
                      </StyledTableCell>
                      <StyledTableCell align='center'>
                        {data.amount}
                      </StyledTableCell>
                      <StyledTableCell
                        style={{ maxWidth: '20vw' }}
                        align='center'
                      >
                        {data.remarks}
                      </StyledTableCell>
                      <StyledTableCell align='center'>
                        {data.date}
                      </StyledTableCell>
                 
                 
                 
                 
                 
                    </StyledTableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>










            <DialogActions>
              <Button onClick={handleCloseRejected} color='primary'>
                Cancel
              </Button>


        
            </DialogActions>
        </DialogContent>
      </Dialog>



    </div>
    
  );
}

const mapStateToProps = (state) => {
  const ledgerList = state.user.ledger.filter(donate => donate.status !== 'Approved' && donate.status !== 'Rejected')
  const ledgerAccepted = state.user.ledger.filter(donate => donate.status === 'Approved')
  const ledgerRejected = state.user.ledger.filter(donate => donate.status === 'Rejected')
  return {
    ledger: {ledgerList, ledgerAccepted, ledgerRejected},
    post: state.user.post,
    userToken: state.auth.token,
  };
};

export default connect(mapStateToProps, { userLedgerAdded, userLedgerAccepted, userLedgerRejected })(LedgerList);
